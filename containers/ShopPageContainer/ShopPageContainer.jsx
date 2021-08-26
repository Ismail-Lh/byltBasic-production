import dynamic from 'next/dynamic';

import classes from './ShopPageContainer.module.scss';

const BackgroundImage = dynamic(() =>
  import('../../components/BackgroundImage/BackgroundImage')
);
const CollectionsContainer = dynamic(() =>
  import('../CollectionsContainer/CollectionsContainer')
);

const ShopPageContainer = () => {
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage />
      </div>

      <CollectionsContainer />
    </div>
  );
};

export default ShopPageContainer;
