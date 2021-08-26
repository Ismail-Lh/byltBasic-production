import { buffer } from 'micro';
import * as admin from 'firebase-admin';
// import { db } from '../../lib/firebase.prod';
// import { collection, doc, setDoc } from '@firebase/firestore/dist/lite';

const serviceAccount = require('../../firebase-adminsdk.json');

// Secure the connection the firebase from the backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulFillOrders = async session => {
  // const usersRef = collection(db, 'users');
  // const emailRef = doc(usersRef, session.metadata.email);
  // const ordersRef = collection(emailRef, 'orders');
  // const idRef = doc(ordersRef, session.id);

  // try {
  //   return setDoc(idRef, {
  //     amount: session.amount_total,
  //     amount_shipping: session.total_details.amount_shipping,
  //     images: JSON.parse(session.metadata.images),
  //     stripe_info: JSON.parse(session.metadata.item),
  //     timestamp: admin.firestore.FieldValue.serverTimestamp(),
  //   }).then(() =>
  //     console.log(
  //       `SUCCESS: Orders ${session.id} had been added to firestore DB.`
  //     )
  //   );
  // } catch (error) {
  //   console.log(error.message);
  // }

  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total,
      amount_shipping: session.total_details.amount_shipping,
      images: JSON.parse(session.metadata.images),
      stripe_info: JSON.parse(session.metadata.item),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() =>
      console.log(
        `SUCCESS: Orders ${session.id} had been added to firestore DB.`
      )
    );
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    const sig = req.headers['stripe-signature'];

    let event;

    // Verify webhook signature and extract the event.
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.error('Error: ', err.message);
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    //  Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      return fulFillOrders(session)
        .then(() => res.status(200))
        .catch(err => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
