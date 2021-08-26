export const formatPrice = (price, discountPer, product_amount = 1) => {
  let finalPrice;

  if (!discountPer || discountPer === undefined)
    finalPrice = price * product_amount;
  else {
    finalPrice = (price - (price * discountPer) / 100) * product_amount;
  }

  const newPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(finalPrice / 100);

  return newPrice;
};

export const getLocalStorage = key => {
  if (typeof window !== 'undefined') {
    let storage = localStorage?.getItem(key);

    if (key === 'menProducts') {
      return storage ? JSON.parse(storage) : [];
    }

    if (key === 'womenProducts') {
      return storage ? JSON.parse(storage) : [];
    }

    if (key === 'singleProduct') {
      return storage ? JSON.parse(storage) : {};
    }

    if (key === 'cart') {
      return storage ? JSON.parse(storage) : [];
    }

    if (key === 'collection') {
      return storage ? JSON.parse(storage) : { route: '', title: '' };
    }

    if (key === 'similarProducts') {
      return storage ? JSON.parse(storage) : [];
    }
  }
};

export const setLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage?.setItem(key, JSON.stringify(value));
  }
};

export const incAmount = (setAmount, stock) => {
  setAmount(oldAmount => {
    let newAmount = oldAmount + 1;

    if (newAmount > stock) {
      newAmount = stock;
    }

    return newAmount;
  });
};

export const decAmount = setAmount => {
  setAmount(oldAmount => {
    let newAmount = oldAmount - 1;

    if (newAmount < 1) {
      newAmount = 1;
    }

    return newAmount;
  });
};
