import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
import classes from './HeroImage.module.scss';

import HeroTitle from '../HeroTitle/HeroTitle';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';

import { Button } from '../../../components';

const HeroImage = ({
  title,
  subtitle,
  imgUrlDesktop,
  imgUrlMobile,
  color,
  route,
  priority,
}) => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 500px)');

  const imgSrc = !matchesMedia ? imgUrlDesktop : imgUrlMobile;

  return (
    <div className={classes.hero__container}>
      <div
        className={classes.hero__img}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}>
        <Image
          src={imgSrc}
          alt={title}
          layout='fill'
          priority={priority}
          quality={100}
        />
      </div>
      <div className={classes.hero__content}>
        <HeroSubtitle subtitle={subtitle} color={color} />

        <HeroTitle title={title} color={color} />

        <Button route={route} color={color}>
          shop now
        </Button>
      </div>
    </div>
  );
};

export default HeroImage;
