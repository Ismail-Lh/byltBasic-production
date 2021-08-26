import Image from 'next/image';
import classes from './SplitContentImageContainer.module.scss';

const SplitContentImageContainer = ({ imgUrl, imgAlt }) => {
  return (
    <div className={classes.imgContainer} style={{ position: 'relative' }}>
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={900}
        height={600}
        layout='responsive'
      />
    </div>
  );
};

export default SplitContentImageContainer;
