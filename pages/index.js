import dynamic from 'next/dynamic';

import { useProductsContext } from '../contexts/products_context';
import {
  ProductsCategoryData_1,
  ProductsCategoryData_2,
} from '../utils/constants';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/Layout'));

const HeroImage = dynamic(() =>
  import('../components/Hero/HeroImage/HeroImage')
);

const HeroSection = dynamic(() =>
  import('../sections/HeroSection/HeroSection')
);
const ProductsSliderSection = dynamic(() =>
  import('../sections/ProductsSliderSection/ProductsSliderSection')
);
const ProductsCategorySection = dynamic(() =>
  import('../sections/ProductsCategorySection/ProductsCategorySection')
);
const SplitContentSection = dynamic(() =>
  import('../sections/SplitContentSection/SplitContentSection')
);

export default function Home() {
  const { popular_products } = useProductsContext();

  const getPopularProducts = gender => {
    const products = popular_products
      ?.map(products => products[gender])
      .map(products => products);

    return products[0];
  };

  return (
    <Layout>
      <HeroSection />

      <ProductsCategorySection categories={ProductsCategoryData_1} />

      <HeroImage
        title="women's essential collection"
        subtitle='Empowered Style. Essential Comfort.'
        position='center'
        color='#fff'
        route='/collections/womens-essential-collection'
        imgUrlDesktop='/assets/hero__desktop-womens-essential-collection.jpg'
        imgUrlMobile='/assets/hero__mobile-womens-essential-collection.jpg'
        priority={false}
      />

      <ProductsSliderSection
        title="men's popular products"
        products={getPopularProducts('men')}
      />

      <HeroImage
        title='performance collection'
        subtitle='Pushing The Limits'
        position='center'
        color='#fff'
        route='/collections/performance-collection'
        imgUrlDesktop='/assets/hero__desktop-performance-collection.jpg'
        imgUrlMobile='/assets/hero__mobile-performance-collection.jpg'
        priority={false}
      />

      <ProductsCategorySection categories={ProductsCategoryData_2} />

      <SplitContentSection isTextFirst={true} />

      <HeroImage
        title='executive collection'
        subtitle='Made for the Modern Man.'
        position='center'
        color='#fff'
        route='/collections/executive-collection'
        imgUrlDesktop='/assets/hero__desktop-executive-collection.jpg'
        imgUrlMobile='/assets/hero__mobile-executive-collection.jpg'
      />

      <ProductsSliderSection
        title="women's popular products"
        products={getPopularProducts('women')}
      />

      <SplitContentSection isTextFirst={false} />
    </Layout>
  );
}
