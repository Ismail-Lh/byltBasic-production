import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

import classes from './SingleProductImages.module.scss';

const SingleProductImages = ({ product, color }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const Images = ({ handelClick, wh }) => {
    return (
      <>
        {product?.images?.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handelClick && handelClick(idx)}
            style={{ position: 'relative', width: `${wh}`, height: '100%' }}>
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${img}`}
              alt={`${product?.name}-${color}-${idx}`}
              layout='responsive'
              width={540}
              height={675}
              priority={true}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {!matchesMedia ? (
        <div className={classes.singleProductImages_desktop}>
          <Images wh='100%' />
        </div>
      ) : (
        <div className={classes.singleProductImages_mobile}>
          <div className={classes.big_image}>
            <Image
              src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/large/${product?.images[imageIndex]}`}
              alt={`${product?.name}-${color}-${imageIndex}`}
              layout='responsive'
              width={540}
              height={675}
              priority={true}
            />
          </div>

          <div className={classes.small_images}>
            <Images handelClick={setImageIndex} wh='10rem' />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductImages;
