import classes from './SplitContentIcons.module.scss';

import {
  AthleticIcon,
  ShrinkIcon,
  WrinkleIcon,
  FriendsIcon,
  MoneyIcon,
} from '../../Icons';

const SplitContentIcons = ({ isTextFirst }) => {
  return (
    <div className={classes.split__content_icons}>
      {isTextFirst ? (
        <>
          <div className={classes.split__content_icon_1}>
            <WrinkleIcon />
            <span>wrinkle free</span>
          </div>

          <div className={classes.split__content_icon_1}>
            <ShrinkIcon />
            <span>no shrink</span>
          </div>

          <div className={classes.split__content_icon_1}>
            <AthleticIcon />
            <span>athletic fit</span>
          </div>
        </>
      ) : (
        <div className={classes.split__content_icon_2}>
          <FriendsIcon />
          <p> =</p>
          <MoneyIcon />
        </div>
      )}
    </div>
  );
};

export default SplitContentIcons;
