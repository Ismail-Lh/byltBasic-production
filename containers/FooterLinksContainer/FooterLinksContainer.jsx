import dynamic from 'next/dynamic';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import classes from './FooterLinksContainer.module.scss';

const FooterLinks = dynamic(() =>
  import('../../components/FooterLinks/FooterLinks')
);
const MyLink = dynamic(() => import('../../components/MyLink/MyLink'));

import { FacebookIcon, InstagramIcon } from '../../Icons';

const FooterLinksContainer = () => {
  return (
    <div className='container'>
      <div className={classes.footer__links}>
        <div className={classes.footer__links_1}>
          <Image
            src='/assets/Bylt-Logo.png'
            alt='Bylt-Logo'
            width={180}
            height={50.59}
          />

          <div>
            <MyLink route='https://www.facebook.com/BYLTbasics/'>
              <FacebookIcon />
            </MyLink>
            <MyLink route='https://www.instagram.com/byltbasics/'>
              <InstagramIcon />
            </MyLink>
          </div>
        </div>

        <FooterLinks
          links={[
            { link: 'our story', route: '/pages/about-us', id: uuidv4() },
            {
              link: 'our fabrics',
              route: '/pages/fabric-technology',
              id: uuidv4(),
            },
            {
              link: 'gift cards',
              route: '/products/bylt-gift-card',
              id: uuidv4(),
            },
            {
              link: 'bylt fresh',
              route: '/products/bylt-fresh',
              id: uuidv4(),
            },
          ]}
        />

        <FooterLinks
          links={[
            {
              link: 'frequently asked questions',
              route: '/pages/frequently-asked-questions',
              id: uuidv4(),
            },
            {
              link: 'returns & exchanges',
              route: '/pages/returns-exchanges',
              id: uuidv4(),
            },
            {
              link: 'contact us',
              route: '/products/contact-us',
              id: uuidv4(),
            },
            {
              link: 'bylt rewards',
              route: '/products/rewards',
              id: uuidv4(),
            },
          ]}
        />

        <FooterLinks
          links={[
            {
              link: 'shipping policy',
              route: '/pages/shipping-policies-new',
              id: uuidv4(),
            },
            {
              link: 'returns policy',
              route: '/pages/returns-exchanges-new',
              id: uuidv4(),
            },
            {
              link: 'terms of use',
              route: '/products/terms-and-conditions',
              id: uuidv4(),
            },
            {
              link: 'privacy policy',
              route: '/products/privacy-policy',
              id: uuidv4(),
            },
          ]}
        />

        <FooterLinks
          links={[
            {
              link: 'cookie policy',
              route: '/pages/cookie-policy',
              id: uuidv4(),
            },
            {
              link: 'accessibility statement',
              route: '/pages/accessibility',
              id: uuidv4(),
            },
            {
              link: 'california privacy statement',
              route: '/products/california-privacy-statement',
              id: uuidv4(),
            },
          ]}
        />
      </div>

      <div className={classes.footer__copyright}>
        <p className={classes.footer__copyright_1}>
          COPYRIGHT © 2021, BYLT BASICS. ALL RIGHTS RESERVED.
        </p>
        <p className={classes.footer__copyright_2}>
          DEVELOPED BY{' '}
          <MyLink route='https://twitter.com/lhbibe_ismail'>
            ISMAIL LAHBIYEB
          </MyLink>
        </p>
      </div>
    </div>
  );
};

export default FooterLinksContainer;
