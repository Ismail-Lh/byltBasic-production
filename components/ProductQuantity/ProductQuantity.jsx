import classes from './ProductQuantity.module.scss';

import { decAmount, incAmount } from '../../utils/helpers';
import { AmountBtn } from '..';

const ProductQuantity = ({ stock, amount, setAmount }) => {
  return (
    <div className={classes.product__qty}>
      <p>quantity</p>

      <AmountBtn
        incAmount={() => incAmount(setAmount, stock)}
        decAmount={() => decAmount(setAmount)}
        productAmount={amount}
      />
    </div>
  );
};

export default ProductQuantity;
