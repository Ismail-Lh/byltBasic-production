import classes from './ProductSizes.module.scss';

const ProductSizes = ({ productSizes, size, setSize }) => {
  return (
    <div className={classes.product__sizes}>
      <p className={classes.left}>
        size <button className={classes.btn_more}>size guide</button>
      </p>

      <div className={classes.right}>
        {productSizes?.map((s, idx) => (
          <button
            key={idx}
            className={`${s.size === size && 'active-size'}`}
            disabled={!s.isAvailable}
            onClick={() => setSize(s.size)}>
            {s.size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
