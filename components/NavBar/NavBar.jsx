import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

import classes from './NavBar.module.scss';

import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';

import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarIcons from './NavBarIcons/NavBarIcons';
import NavBarLinks from './NavBarLinks/NavBarLinks';

const DynamicMobileMenu = dynamic(() => import('../MobileMenu/MobileMenu'));
const DynamicCart = dynamic(() => import('../Cart/Cart'));

const NavBar = () => {
  const { isCartOpen } = useCartContext();
  const { isSidebarOpen } = useProductsContext();

  return (
    <nav className={classes.navbar}>
      <div className='container'>
        <div className={classes.navbar__items}>
          <NavBarLinks />

          <NavBarLogo />

          <NavBarIcons />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isSidebarOpen && <DynamicMobileMenu />}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isCartOpen && <DynamicCart />}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
