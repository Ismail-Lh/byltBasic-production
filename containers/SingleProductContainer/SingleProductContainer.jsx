import dynamic from 'next/dynamic';
import { useState } from 'react';
import classes from './SingleProductContainer.module.scss';

import { useProductsContext } from '../../contexts/products_context';

import { SingleProductImages, SingleProductInfo } from '../../components';

const ProductsSliderSection = dynamic(() =>
  import('../../sections/ProductsSliderSection/ProductsSliderSection')
);

const SingleProductContainer = () => {
  const { single_product: product, similar_products: products } =
    useProductsContext();

  const [color, setColor] = useState(product?.productColor);

  return (
    <div className={classes.singleProduct}>
      <div className='container'>
        <div className={classes.singleProduct_container}>
          <SingleProductImages product={product?.productInfo} color={color} />
          <SingleProductInfo
            product={product?.productInfo}
            color={color}
            changeColor={setColor}
          />
        </div>

        <ProductsSliderSection title='you my also like' products={products} />
      </div>
    </div>
  );
};

export default SingleProductContainer;
