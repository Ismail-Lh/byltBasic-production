import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@react-hook/media-query';

import classes from './Filters.module.scss';

import { AngleRightIcon } from '../../Icons';

const DynamicFiltersModal = dynamic(() =>
  import('../FiltersModal/FiltersModal')
);

import { FiltersValue } from '..';

const Filters = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const [openFiltersModal, setOpenFiltersModal] = useState(false);

  const FiltersContainer = ({ children, handelClick }) => (
    <div
      className={classes.filters}
      onClick={() => handelClick && handelClick()}>
      <h3 className={classes.filters__title}>filters</h3>
      {children}
    </div>
  );

  return (
    <>
      {!matchesMedia ? (
        <FiltersContainer>
          <FiltersValue />
        </FiltersContainer>
      ) : (
        <>
          <FiltersContainer handelClick={() => setOpenFiltersModal(true)}>
            <AngleRightIcon />
          </FiltersContainer>

          {openFiltersModal && (
            <DynamicFiltersModal setOpenFiltersModal={setOpenFiltersModal} />
          )}
        </>
      )}
    </>
  );
};

export default Filters;
