import dynamic from 'next/dynamic';
import { useMediaQuery } from '@react-hook/media-query';

import classes from './CollectionsContainer.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { useProductsContext } from '../../contexts/products_context';

const ProductsCard = dynamic(() =>
  import('../../components/ProductsCard/ProductsCard')
);
const SortProducts = dynamic(() =>
  import('../../components/SortProducts/SortProducts')
);
const Filters = dynamic(() => import('../../components/Filters/Filters'));
const Loader = dynamic(() => import('../../components/Loader/Loader'));

const CollectionsContainer = () => {
  const { loading } = useProductsContext();
  const { filtered_products: products } = useFiltersContext();

  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const FiltersContainer = () => (
    <div>
      <Filters />
    </div>
  );

  const SortsContainer = () => (
    <div className={classes.sorts}>
      <SortProducts />
    </div>
  );

  return (
    <div className='container'>
      {loading ? (
        <Loader message='products loading...' />
      ) : (
        <div className={classes.collections__grid}>
          {!matchesMedia ? (
            <>
              <FiltersContainer />

              <div className={classes.collections__products}>
                <SortsContainer />

                <div className={classes.products}>
                  {products?.map(product => (
                    <ProductsCard product={product} key={product.id} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={classes.collections__filters}>
                <FiltersContainer />
                <SortsContainer />
              </div>

              <div className={classes.products}>
                {products?.map(product => (
                  <ProductsCard product={product} key={product.id} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionsContainer;
