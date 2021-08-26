import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const AboutUsPageContainer = dynamic(() =>
  import('../../containers/AboutUsPageContainer/AboutUsPageContainer')
);

const AboutUsPage = () => {
  return (
    <Layout title='Our Story | BYLT Premium'>
      <AboutUsPageContainer />
    </Layout>
  );
};

export default AboutUsPage;
