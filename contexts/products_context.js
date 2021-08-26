import React, { useContext, createContext, useReducer, useEffect } from 'react';
import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_SIMILAR_PRODUCTS,
  OPEN_PRODUCT_MODAL,
  CLOSE_PRODUCT_MODAL,
} from '../utils/actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  isProductModalOpen: false,
  men_products: getLocalStorage('menProducts'),
  women_products: getLocalStorage('womenProducts'),
  loading: false,
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
  product_color: null,
  similar_products: getLocalStorage('similarProducts'),
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { men, loading } = useFirebaseData('men');
  const { women } = useFirebaseData('women');

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openProductModal = () => {
    dispatch({ type: OPEN_PRODUCT_MODAL });
  };

  const closeProductModal = () => {
    dispatch({ type: CLOSE_PRODUCT_MODAL });
  };

  // Get menProducts && womenProducts
  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
      payload: { men, women, loading },
    });
  }, [men, women, loading]);

  useEffect(() => {
    setLocalStorage('menProducts', state.men_products);
    setLocalStorage('womenProducts', state.women_products);
  }, [state.men_products, state.women_products]);

  useEffect(() => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });
  }, [state.women_products, state.men_products]);

  const getSingleProduct = (productId, gender, color) => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: { productId, gender, color },
    });
  };

  useEffect(() => {
    setLocalStorage('singleProduct', state.single_product);
  }, [state.single_product]);

  const getSimilarProducts = (collection, gender, productId) => {
    dispatch({
      type: GET_SIMILAR_PRODUCTS,
      payload: { collection, gender, productId },
    });
  };

  useEffect(() => {
    setLocalStorage('similarProducts', state.similar_products);
  }, [state.similar_products]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openProductModal,
        closeProductModal,
        getSingleProduct,
        getSimilarProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
