import {
  ADD_TO_CART,
  CLOSE_CART,
  OPEN_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  COUNT_TOTAL_PRODUCTS,
  COUNT_CART_SUBTOTAL,
  TOGGLE_CART_AMOUNT,
} from '../utils/actions';

import { formatPrice } from '../utils/helpers';

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, size, color, id, product } = action.payload;

    const tempItem = state.cart.find(item => item.id === id + color + size);

    if (tempItem) {
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === id + color + size) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color + size,
        name: product.name,
        style: product.style,
        collections: product.collections,
        route: product.route,
        gender: product.gender,
        color,
        price: product.price,
        discountPer: product.discountPer,
        image: product.images[0],
        size,
        amount,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }

  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  if (action.type === REMOVE_FROM_CART) {
    const id = action.payload;

    const newCart = state.cart.filter(product => product.id !== id);

    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === COUNT_TOTAL_PRODUCTS) {
    const productAmount = state.cart.map(({ amount }) => amount);

    const totalProducts = productAmount.reduce((acc, curr) => acc + curr, 0);

    return { ...state, total_products: totalProducts };
  }

  if (action.type === COUNT_CART_SUBTOTAL) {
    const totalPrices = state.cart.map(({ price, discountPer, amount }) => {
      let prices;

      if (!discountPer || discountPer === 'undefined') prices = price * amount;
      else prices = (price - (price * discountPer) / 100) * amount;

      return prices;
    });

    const finalSubTotal = totalPrices.reduce((acc, curr) => acc + curr, 0);

    return { ...state, subTotal: formatPrice(finalSubTotal) };
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map(item => {
      if (item.id === id) {
        let newAmount;
        if (value === 'inc') {
          newAmount = item.amount + 1;

          if (newAmount > item.max) {
            newAmount = item.max;
          }

          return { ...item, amount: newAmount };
        } else if (value === 'dec') {
          newAmount = item.amount - 1;

          if (newAmount < 1) {
            newAmount = 1;
          }

          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
