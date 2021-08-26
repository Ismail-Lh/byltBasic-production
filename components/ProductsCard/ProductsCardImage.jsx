import Image from 'next/image';

import classes from './style.module.scss';
import { Button, MyLink } from '..';
import { useProductsContext } from '../../contexts/products_context';

const ProductsCardImage = ({ product, productRoute, color }) => {
  const { getSingleProduct, getSimilarProducts, openProductModal } =
    useProductsContext();

  const handelClick = () => {
    getSingleProduct(product?.id, product?.gender, color);
    openProductModal();
  };

  return (
    <div
      className={classes.card__image}
      onClick={() => {
        getSingleProduct(product?.id, product?.gender, color);
        getSimilarProducts(product?.collections, product?.gender, product?.id);
      }}>
      <MyLink route={productRoute}>
        <Image
          src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/small/${product?.images[0]}`}
          alt={`${product?.name}-${color}`}
          layout='fill'
        />
      </MyLink>

      <Button handelClick={handelClick}>quick add</Button>

      {product?.discountPer && (
        <img
          src='/assets/sale-badge.svg'
          alt='sale-badge'
          className={classes.sale_badge}
        />
      )}
    </div>
  );
};

export default ProductsCardImage;
