import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SuccessCheckoutPageContainer = dynamic(() =>
  import(
    '../../containers/SuccessCheckoutPageContainer/SuccessCheckoutPageContainer'
  )
);

const SuccessCheckoutPage = () => {
  return (
    <Layout title='Checkout Success | BYLT Premium'>
      <SuccessCheckoutPageContainer />
    </Layout>
  );
};

export default SuccessCheckoutPage;
