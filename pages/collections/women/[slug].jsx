import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { useFiltersContext } from '../../../contexts/filters_context';

const Layout = dynamic(() => import('../../../components/Layout/Layout'));

const ShopPageContainer = dynamic(() =>
  import('../../../containers/ShopPageContainer/ShopPageContainer')
);

const WomensCollections = () => {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = route => {
    let title = '';

    const strIncludes = str => route?.includes(str);

    if (strIncludes('womens-tops')) title = "Women's tops";
    if (strIncludes('tank')) title = 'Essential Tank';
    if (strIncludes('tee')) title = 'Essential Tee';
    if (strIncludes('crop')) title = 'Crop Top';
    if (strIncludes('womens-bottoms')) title = "Women's Bottoms";
    if (strIncludes('joggers')) title = "Women's Joggers";
    if (strIncludes('leggings')) title = "Women's Leggings";
    if (strIncludes('accessories')) title = 'Hats & Accessories';
    if (strIncludes('hats')) title = 'Hats';
    if (strIncludes('gift')) title = 'Gift Cards';

    return title;
  };

  const title = getTheCollectionTitle(slug);

  useEffect(() => {
    updateCollection(slug, title);
  }, [slug]);

  return (
    <Layout title={`${title} | BYLT Basics`}>
      <ShopPageContainer />
    </Layout>
  );
};

export default WomensCollections;
