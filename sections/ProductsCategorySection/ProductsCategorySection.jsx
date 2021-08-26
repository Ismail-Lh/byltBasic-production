import dynamic from 'next/dynamic';

import classes from './ProductsCategorySection.module.scss';

// const ProductsCategoryCard = dynamic(() =>
//   import('../../components/ProductsCategoryCard/ProductsCategoryCard')
// );

import { ProductsCategoryCard } from '../../components';

const ProductsCategorySection = ({ categories }) => {
  return (
    <div className='container'>
      <div className={classes.products__category_1}>
        {categories.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard
            key={id}
            category={category}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategorySection;
