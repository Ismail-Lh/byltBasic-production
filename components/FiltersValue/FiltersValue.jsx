import classes from './FiltersValue.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { Button, FilterType } from '..';

const FiltersValue = () => {
  const { products, clearFilters } = useFiltersContext();

  const productsObject = Object.assign({}, ...products);

  const productsKey = Object.keys(productsObject);

  const substrings = [
    'collections',
    'style',
    'cut',
    'fabric',
    'sleeve',
    'neck',
  ];

  const containsAny = (keys, substrings) => {
    const key = keys.map(key => {
      for (let i = 0; i != substrings.length; i++) {
        let filtersTitle = [];
        let str = substrings[i];

        if (key.includes(str)) {
          filtersTitle.push(key);

          return filtersTitle;
        }
      }
    });

    return [].concat(...key);
  };

  const filtersTitle = containsAny(productsKey, substrings)
    .filter(key => key !== undefined)
    .sort((a, b) => a.localeCompare(b));

  return (
    <>
      {filtersTitle.map((title, idx) => (
        <FilterType key={idx} title={title} products={products} />
      ))}

      <div className={classes.filters__clear}>
        <Button color='black' handelClick={clearFilters}>
          clear filters
        </Button>
      </div>
    </>
  );
};

export default FiltersValue;
