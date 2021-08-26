import { useState } from 'react';
import { useProductsContext } from '../../contexts/products_context';
import { CloseIcon } from '../../Icons';
import MyLink from '../MyLink/MyLink';
import classes from './SearchInput.module.scss';

const SearchInput = ({ closeSearchBar }) => {
  const { men_products, women_products, getSingleProduct } =
    useProductsContext();

  const allProducts = [...men_products, ...women_products];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handelSearch = e => {
    const searchWord = e.target.value;
    setSearchValue(searchWord);

    const newFilter = allProducts.filter(({ name }) =>
      name.toLowerCase().includes(searchWord.toLowerCase())
    );

    if (searchWord === '') setFilteredProducts([]);
    else setFilteredProducts(newFilter);
  };

  const handelClick = (id, gender, color) => {
    setFilteredProducts([]);
    setSearchValue('');
    getSingleProduct(id, gender, color);
  };

  return (
    <div className={classes.search}>
      <div className={classes.search__input}>
        <input
          type='text'
          placeholder='search'
          value={searchValue}
          onChange={handelSearch}
        />

        <button onClick={() => closeSearchBar(false)}>
          <CloseIcon />
        </button>
      </div>

      {filteredProducts.length !== 0 && (
        <div className={classes.search__results}>
          {filteredProducts
            .slice(0, 10)
            .map(({ name, id, route, gender, colors }) => (
              <div
                onClick={() => handelClick(id, gender, colors[0])}
                className={classes.result}>
                <MyLink
                  key={id}
                  route={`/products/${route}/?gender=${gender}&id=${id}`}>
                  {name}
                </MyLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
