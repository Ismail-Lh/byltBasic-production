import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const ContactUsPageContainer = dynamic(() =>
  import('../../containers/ContactUsPageContainer/ContactUsPageContainer')
);

const ContactUsPage = () => {
  return (
    <Layout title='Customer Support | BYLT Premium'>
      <ContactUsPageContainer />
    </Layout>
  );
};

export default ContactUsPage;
