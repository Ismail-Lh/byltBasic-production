import { useState } from 'react';
import classes from './style.module.scss';

import ProductsCardImage from './ProductsCardImage';
import ProductsCardInfo from './ProductsCardInfo';

const ProductsCard = ({ product }) => {
  const [color, setColor] = useState(product?.colors[0]);

  const productRoute = `/products/${product?.route}/?gender=${product?.gender}&id=${product?.id}`;

  return (
    <div className={classes.card}>
      <ProductsCardImage
        product={product}
        productRoute={productRoute}
        color={color}
      />

      <ProductsCardInfo
        product={product}
        color={color}
        setColor={setColor}
        productRoute={productRoute}
      />
    </div>
  );
};

export default ProductsCard;
