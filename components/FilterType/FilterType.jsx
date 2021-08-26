import { useState } from 'react';
import classes from './FilterType.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { AngleDownIcon, AngleUpIcon } from '../../Icons';

const FilterType = ({ title, products }) => {
  const { updateFilters } = useFiltersContext();
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const filtersValue = [...new Set(products?.map(product => product[title]))];

  return (
    <div className={classes.filter__type}>
      <div
        className={classes.filter__type_title}
        onClick={() => setToggleAccordion(!toggleAccordion)}>
        <h3>{title}</h3>
        {!toggleAccordion ? <AngleDownIcon /> : <AngleUpIcon />}
      </div>

      {toggleAccordion && (
        <div className={classes.filter__type_value}>
          {filtersValue.map((value, idx) => (
            <>
              {value !== undefined && (
                <div key={idx} onClick={() => updateFilters(title, value)}>
                  <img
                    src={`/assets/filters/${title}/${value}.png`}
                    alt={value}
                  />
                  <h4>{value}</h4>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterType;
