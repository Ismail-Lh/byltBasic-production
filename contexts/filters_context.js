import React, { useContext, createContext, useReducer, useEffect } from 'react';

import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';
import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import {
  UPDATE_COLLECTION,
  GET_PRODUCTS_BY_COLLECTION,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';

const FiltersContext = createContext();

const initialState = {
  collection: getLocalStorage('collection'),
  products: [],
  filtered_products: [],
  sort: 'sort by',
  filters: {
    collections: 'all',
    style: 'all',
    cut: 'all',
    neck: 'all',
    sleeve: 'all',
    fabric: 'all',
  },
};

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FiltersReducer, initialState);
  const { men_products, women_products } = useProductsContext();

  const updateCollection = (route, title) => {
    dispatch({ type: UPDATE_COLLECTION, payload: { route, title } });
  };

  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS_BY_COLLECTION,
      payload: { men_products, women_products },
    });

    setLocalStorage('collection', state.collection);
  }, [state.collection, men_products, women_products]);

  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const updateFilters = (type, value) => {
    dispatch({ type: UPDATE_FILTERS, payload: { type, value } });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        updateCollection,
        updateSort,
        updateFilters,
        clearFilters,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
