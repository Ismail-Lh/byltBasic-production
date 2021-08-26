import dynamic from 'next/dynamic';

import classes from './CartItems.module.scss';
import { formatPrice } from '../../utils/helpers';
import { useCartContext } from '../../contexts/cart_context';

// const DynamicAmountBtn = dynamic(() => import('../AmountBtn/AmountBtn'));
// const DynamicMyLink = dynamic(() => import('../MyLink/MyLink'));
// const DynamicCloseIcon = dynamic(() => import('../../Icons/CloseIcon'));

import { AmountBtn, MyLink } from '..';
import { CloseIcon } from '../../Icons';

const CartItems = () => {
  const { cart: products, removeFromCart, toggleCartAmount } = useCartContext();

  return (
    <div className={classes.cart__products}>
      {products?.map(
        ({
          id,
          name,
          color,
          size,
          amount,
          price,
          discountPer,
          image,
          collections,
          style,
          route,
          gender,
        }) => (
          <div className={classes.product} key={id}>
            <div className={classes.product__img}>
              <MyLink route={`/products/${route}`}>
                <img
                  src={`/assets/products/${gender}/${collections}/${style}/${name}/${color}/small/${image}`}
                  alt={`${name}-${color}-${size}`}
                />
              </MyLink>
            </div>

            <div className={classes.product__info}>
              <div className={classes.product__info_1}>
                <div>
                  <h2 className={classes.name}>
                    <MyLink route={`/products/${route}`}>{name}</MyLink>
                  </h2>
                  <p className={classes.color}>color: {color}</p>
                  <p className={classes.size}>size: {size}</p>
                </div>
                <div className={classes.deleteProduct}>
                  <button onClick={() => removeFromCart(id)}>
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className={classes.product__info_2}>
                <AmountBtn
                  productAmount={amount}
                  incAmount={() => toggleCartAmount(id, 'inc')}
                  decAmount={() => toggleCartAmount(id, 'dec')}
                />

                <p className={classes.price}>
                  {formatPrice(price, discountPer, amount)} USD
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CartItems;
