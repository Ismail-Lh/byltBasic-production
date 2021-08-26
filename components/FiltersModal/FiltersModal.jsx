import classes from './FiltersModal.module.scss';
import { CloseIcon } from '../../Icons';
import { FiltersValue } from '..';

const FiltersModal = ({ setOpenFiltersModal }) => {
  return (
    <div className={classes.filtersModal}>
      <div className={classes.filtersModal__header}>
        <h3 className={classes.title}>filters</h3>
        <button
          className={classes.closeBtn}
          onClick={() => setOpenFiltersModal(false)}>
          <CloseIcon />
        </button>
      </div>
      <FiltersValue />
    </div>
  );
};

export default FiltersModal;
