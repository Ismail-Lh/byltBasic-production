import Link from 'next/link';
import { motion } from 'framer-motion';

import classes from './MobileMenu.module.scss';
import { useFiltersContext } from '../../contexts/filters_context';
import { useProductsContext } from '../../contexts/products_context';
import { NavbarLinks } from '../../utils/constants';
import { sideBarVariants } from '../../utils/animations';

import { CloseIcon, SearchIcon } from '../../Icons';

const MobileMenu = () => {
  const { closeSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  return (
    <motion.div
      variants={sideBarVariants}
      initial='initial'
      animate='animate'
      exit='initial'
      className={classes.mobileMenu}>
      <div className={classes.mobileMenu__icons}>
        <button type='button' onClick={closeSidebar}>
          <CloseIcon />
        </button>
      </div>

      <form className={classes.mobileMenu__form}>
        <input type='text' placeholder='search' />
        <SearchIcon />
      </form>

      <ul className={classes.mobileMenu__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            key={id}
            onClick={() => {
              updateCollection(link);
              closeSidebar();
            }}>
            <Link href={`/collections/${route}`}>{link}</Link>
          </li>
        ))}
        <li onClick={closeSidebar}>
          <Link href='/account/login'>login</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
