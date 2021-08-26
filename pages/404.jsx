import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/Layout/Layout'));

const PageNotFoundContainer = dynamic(() =>
  import('../containers/PageNotFoundContainer/PageNotFoundContainer')
);

const PageNotFound = () => {
  return (
    <Layout title='404 Not Found | BYLT Basics'>
      <PageNotFoundContainer />
    </Layout>
  );
};

export default PageNotFound;
