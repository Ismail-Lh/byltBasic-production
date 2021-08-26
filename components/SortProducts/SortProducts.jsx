import { useFiltersContext } from '../../contexts/filters_context';
import classes from './SortProducts.module.scss';

const SortProducts = () => {
  const { sort, updateSort } = useFiltersContext();

  return (
    <form className={classes.form}>
      <select
        name='sort'
        id='sort'
        className={classes.form__select}
        value={sort}
        onChange={updateSort}>
        <option value='sort-by'>sort by</option>
        <option value='price-lowest'>price: low to hight</option>
        <option value='price-highest'>price: hight to low</option>
        <option value='new-old'>newest</option>
        <option value='old-new'>oldest</option>
        <option value='name-a'>a - z</option>
        <option value='name-z'>z - a</option>
      </select>
    </form>
  );
};

export default SortProducts;
