import dynamic from 'next/dynamic';

import PrivateRoute from '../../HOC/PrivateRoute';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const AccountPageContainer = dynamic(() =>
  import('../../containers/AccountPageContainer/AccountPageContainer')
);

const AccountPage = () => {
  return (
    <Layout title='Account | BYLT Basics'>
      <AccountPageContainer />
    </Layout>
  );
};

export default PrivateRoute(AccountPage);
