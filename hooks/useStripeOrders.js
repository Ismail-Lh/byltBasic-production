import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { useAuthContext } from '../contexts/auth_context';
import { collection, doc, getDocs, orderBy } from 'firebase/firestore/lite';
import { db } from '../lib/firebase.prod';

const useStripeOrders = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  if (!user) return;

  useEffect(() => {
    try {
      const firebaseOrders = async () => {
        setLoading(true);

        const usersRef = collection(db, 'users');
        const docRef = doc(usersRef, user.email);
        const ordersRef = collection(docRef, 'orders');

        const ordersRes = await getDocs(
          ordersRef,
          orderBy('timestamp', 'desc')
        );

        const allOrders = ordersRes.docs.map(doc => ({
          ...doc.data(),
          timestamp: format(
            doc.data().timestamp.toDate(),
            'do MMM yyy - HH:mm:ss a'
          ),
          docId: doc.id,
        }));

        setOrders(allOrders);

        setLoading(false);
      };

      firebaseOrders();

      // cleanup
      return () => {
        setData([]);
      };
    } catch (error) {
      setErr(error.message);
    }
  }, []);

  return { orders, loading, err };
};

export default useStripeOrders;
