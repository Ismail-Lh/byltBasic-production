import classes from './ProductSale.module.scss';

const ProductSale = ({ discountPer }) => {
  return (
    <>
      {discountPer && (
        <p className={classes.productSale}>sale {discountPer}% off</p>
      )}
    </>
  );
};

export default ProductSale;
