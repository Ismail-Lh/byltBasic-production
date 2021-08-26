import classes from './ProductsCategoryCard.module.scss';

import { Button } from '..';
import Image from 'next/image';

const ProductsCategoryCard = ({ category, imgUrl, route }) => {
  return (
    <div className={classes.card}>
      <div
        className={classes.card__img}
        style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src={imgUrl} alt={category} layout='fill' />
      </div>

      <div className={classes.card__content}>
        <h3>{category}</h3>
        <Button route={route} color='white'>
          shop now
        </Button>
      </div>
    </div>
  );
};

export default ProductsCategoryCard;
