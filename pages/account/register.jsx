import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const RegisterPageContainer = dynamic(() =>
  import('../../containers/RegisterPageContainer/RegisterPageContainer')
);

const RegisterPage = () => {
  return (
    <Layout title='Create Account | BYLT Basics'>
      <RegisterPageContainer />
    </Layout>
  );
};

export default RegisterPage;
