import { useState } from 'react';
import dynamic from 'next/dynamic';
import classes from './NavBarLinks.module.scss';

import { useProductsContext } from '../../../contexts/products_context';
import { useFiltersContext } from '../../../contexts/filters_context';

import {
  menCategories,
  menCollections,
  NavbarLinks,
  womenCategories,
  womenCollections,
} from '../../../utils/constants';

import { MenuIcon } from '../../../Icons';
import { MyLink } from '../../';

const DynamicDropDownMenu = dynamic(() =>
  import('../../DropDownMenu/DropDownMenu')
);

const NavBarLinks = () => {
  const { openSidebar } = useProductsContext();
  const { updateCollection } = useFiltersContext();

  const [showMenDropMenu, setShowMenDropMenu] = useState(false);
  const [showWomenDropMenu, setShowWomenDropMenu] = useState(false);

  const handelHover = (link, state) => {
    link === 'men' && setShowMenDropMenu(state);
    link === 'women' && setShowWomenDropMenu(state);
  };

  const handelClick = link => {
    link === 'men' && updateCollection('shop-men', 'all men');
    link === 'women' && updateCollection('shop-women', 'all women');
    link === 'bundles' && updateCollection('bundles', 'bundles');
    link === 'last call' && updateCollection('sales', 'last call');
  };

  return (
    <>
      <ul className={classes.navbar__list}>
        {NavbarLinks.map(({ id, link, route }) => (
          <li
            className={classes.navbar__links}
            key={id}
            onClick={e => {
              e.stopPropagation();
              handelClick(link);
            }}
            onMouseEnter={e => {
              e.stopPropagation();
              handelHover(link, true);
            }}
            onMouseLeave={e => {
              e.stopPropagation();
              handelHover(link, false);
            }}>
            <MyLink route={`/collections/${route}`}>{link}</MyLink>

            {link === 'men' && showMenDropMenu && (
              <DynamicDropDownMenu
                collections={menCollections}
                productsCategories={menCategories}
                gender='men'
                imageInfo={{
                  imgUrl: 'men-drop-down-img.jpg',
                  route: '/collections/spring-collection',
                  subtitle: 'shop the latest styles',
                  title: 'gear up for summer',
                }}
              />
            )}

            {link === 'women' && showWomenDropMenu && (
              <DynamicDropDownMenu
                collections={womenCollections}
                productsCategories={womenCategories}
                gender='women'
                imageInfo={{
                  imgUrl: 'women-drop-down-img.jpg',
                  route: '/products/womens-elite-joggers',
                  subtitle: 'ultimate comfort. premium style.',
                  title: "women's elite + joggers",
                }}
              />
            )}
          </li>
        ))}
      </ul>
      <div className={classes.menu__icon}>
        <button type='button' onClick={openSidebar}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default NavBarLinks;
