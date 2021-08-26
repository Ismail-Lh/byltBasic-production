import dynamic from 'next/dynamic';

const FooterFormContainer = dynamic(() =>
  import('../../containers/FooterFormContainer/FooterFormContainer')
);
const FooterLinksContainer = dynamic(() =>
  import('../../containers/FooterLinksContainer/FooterLinksContainer')
);

const FooterSection = () => {
  return (
    <div className='container'>
      <FooterFormContainer />
      <FooterLinksContainer />
    </div>
  );
};

export default FooterSection;
