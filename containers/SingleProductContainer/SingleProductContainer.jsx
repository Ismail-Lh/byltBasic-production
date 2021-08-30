import dynamic from 'next/dynamic';
import { useState } from 'react';
import classes from './SingleProductContainer.module.scss';

import { useProductsContext } from '../../contexts/products_context';

import {
  Button,
  MyLink,
  SingleProductImages,
  SingleProductInfo,
} from '../../components';

const ProductsSliderSection = dynamic(() =>
  import('../../sections/ProductsSliderSection/ProductsSliderSection')
);

const SingleProductContainer = () => {
  const { single_product: product, similar_products: products } =
    useProductsContext();

  const [color, setColor] = useState(product?.productColor);

  const { gender, collections, name } = product?.productInfo;

  const genderCollection = gender === 'men' ? 'shop-men' : 'shop-women';

  return (
    <div className={classes.singleProduct}>
      <div className='container'>
        <div className={classes.singleProduct__links}>
          <MyLink route='/'>Home /</MyLink>
          <MyLink route={`/collections/${genderCollection}`}>
            {genderCollection} /
          </MyLink>
          <MyLink route={`/collections/${collections}`}>{collections} /</MyLink>
          <p>{name}</p>
        </div>

        <div className={classes.singleProduct__btns}>
          <Button route='/'>Home page</Button>
          <Button route={`/collections/${gender}/${genderCollection}`}>
            {genderCollection}
          </Button>
        </div>

        <div className={classes.singleProduct__container}>
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
