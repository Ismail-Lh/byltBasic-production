import dynamic from 'next/dynamic';
import Image from 'next/image';

import classes from './NavBarLogo.module.scss';

import { MyLink } from '../../../components';

const NavBarLogo = () => {
  return (
    <div className={classes.navbar__logo}>
      <MyLink route='/'>
        <Image
          src='/assets/Bylt-Logo.png'
          alt='Bylt-Logo'
          width={130}
          height={36.53}
          priority={true}
        />
      </MyLink>
    </div>
  );
};

export default NavBarLogo;
