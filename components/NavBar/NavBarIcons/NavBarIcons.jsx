import { useState } from 'react';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';

import classes from './NavBarIcons.module.scss';

import { useCartContext } from '../../../contexts/cart_context';
import { useAuthContext } from '../../../contexts/auth_context';

import { MyLink } from '../..';

const DynamicSearchInput = dynamic(() =>
  import('../../SearchInput/SearchInput')
);

import { CartIcon, LoginIcon, ContactIcon, SearchIcon } from '../../../Icons';

const NavBarIcons = () => {
  const { openCart, total_products } = useCartContext();
  const { user } = useAuthContext();

  const [openSearchInput, setOpenSearchInput] = useState(false);

  const loginRoute = user ? '/account' : '/account/login';

  const Icons = [
    { id: uuidv4(), icon: <ContactIcon />, route: '/pages/contact-us' },
    { id: uuidv4(), icon: <LoginIcon />, route: loginRoute },
    { id: uuidv4(), icon: <CartIcon />, cartIcon: true },
  ];

  return (
    <>
      <div
        className={classes.navbar__icons_1}
        style={{
          justifyContent: `${openSearchInput ? 'flex-start' : 'flex-end'}`,
        }}>
        {openSearchInput ? (
          <DynamicSearchInput closeSearchBar={setOpenSearchInput} />
        ) : (
          <>
            <button onClick={() => setOpenSearchInput(true)}>
              <SearchIcon />
            </button>

            {Icons.map(({ id, icon, route, cartIcon }) => (
              <MyLink route={route} key={id} handelClick={cartIcon && openCart}>
                {icon}
                {cartIcon && <span>{total_products}</span>}
              </MyLink>
            ))}
          </>
        )}
      </div>

      <button className={classes.navbar__icons_2} onClick={openCart}>
        <CartIcon />
        <span>{total_products}</span>
      </button>
    </>
  );
};

export default NavBarIcons;
