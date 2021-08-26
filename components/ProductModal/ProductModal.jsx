import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './ProductModal.module.scss';
import { CloseIcon } from '../../Icons';
import { SingleProductInfo } from '..';
import { useProductsContext } from '../../contexts/products_context';
import { productModalVariants } from '../../utils/animations';

const ProductModal = () => {
  const { closeProductModal, single_product } = useProductsContext();

  const { productInfo: product, productColor } = single_product;

  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(productColor);
  }, [productColor]);

  return (
    <motion.div
      variants={productModalVariants}
      initial='initial'
      animate='animate'
      exit='initial'
      className={classes.productModal}>
      <div className={classes.productModal__content}>
        <div className={classes.closeBtn}>
          <button onClick={closeProductModal}>
            <CloseIcon />
          </button>
        </div>

        <div className={classes.product}>
          <div
            className={classes.product__image}
            style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[0]}`}
              alt={`${product?.name}-${color}`}
              priority={true}
              layout='fill'
            />
          </div>

          <SingleProductInfo
            product={product}
            color={color}
            changeColor={setColor}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductModal;
