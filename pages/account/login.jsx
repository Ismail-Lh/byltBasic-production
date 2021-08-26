import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const LoginPageContainer = dynamic(() =>
  import('../../containers/LoginPageContainer/LoginPageContainer')
);

const LoginPage = () => {
  return (
    <Layout title='Login | BYLT Premium'>
      <LoginPageContainer />
    </Layout>
  );
};

export default LoginPage;
