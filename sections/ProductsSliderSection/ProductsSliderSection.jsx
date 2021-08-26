import dynamic from 'next/dynamic';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './ProductsSliderSection.module.scss';
import { useProductsContext } from '../../contexts/products_context';

const Loader = dynamic(() => import('../../components/Loader/Loader'));

import { ProductsCard } from '../../components';

const ProductsSliderSection = ({ products, title }) => {
  const { loading } = useProductsContext();

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.products}>
      <div className='container'>
        {loading ? (
          <Loader message='products loading...' />
        ) : (
          <>
            {products?.length <= 4 ? (
              <div className={classes.products__grid}>
                <h2 className={classes.title}>{title}</h2>

                <div className={classes.products}>
                  {products?.map(product => (
                    <ProductsCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <div className={classes.products__slider}>
                <h2 className={classes.title}>{title}</h2>

                <Carousel ssr={false} infinite={true} responsive={responsive}>
                  {products?.map(product => (
                    <ProductsCard key={product.id} product={product} />
                  ))}
                </Carousel>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsSliderSection;
