import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useFiltersContext } from '../../../contexts/filters_context';

const Layout = dynamic(() => import('../../../components/Layout/Layout'));

const ShopPageContainer = dynamic(() =>
  import('../../../containers/ShopPageContainer/ShopPageContainer')
);

const MensCollections = () => {
  const { updateCollection } = useFiltersContext();

  const router = useRouter();
  const { slug } = router.query;

  const getTheCollectionTitle = route => {
    let title = '';

    const strIncludes = str => route?.includes(str);

    // Men's tops collections
    if (strIncludes('mens-tops')) title = 'Tops';
    if (strIncludes('drop-cuts')) title = 'Drop-Cuts';
    if (strIncludes('long-sleeves')) title = 'Long Sleeves';
    if (strIncludes('vnecks')) title = 'V-Necks';
    if (strIncludes('crews')) title = 'Crews';
    if (strIncludes('henleys')) title = 'Henleys';
    if (strIncludes('polos')) title = 'Polos';
    if (strIncludes('executive')) title = 'Executive Collection';
    if (strIncludes('dotted')) title = 'Dotted Collection';
    if (strIncludes('striped')) title = 'Stripes';
    if (strIncludes('tanks')) title = 'Tanks';

    // Men's bottoms collections
    if (strIncludes('mens-bottoms')) title = 'Bottoms';
    if (strIncludes('shorts')) title = 'Shorts';
    if (strIncludes('mens-joggers')) title = 'Joggers';
    if (strIncludes('mens-pants')) title = 'Pants';

    // Men's outerwear collections
    if (strIncludes('outerwear')) title = 'Outerwear';
    if (strIncludes('pullovers')) title = 'Pullovers';
    if (strIncludes('jackets')) title = 'Jackets';

    // Men's underwear collections
    if (strIncludes('underwear')) title = 'Underwear';
    if (strIncludes('boxer')) title = 'Boxer Briefs';
    if (strIncludes('trunks')) title = 'Trunks';

    // Accessories collections
    if (strIncludes('accessories')) title = 'Hats & Accessories';
    if (strIncludes('hats')) title = 'Hats';
    if (strIncludes('socks')) title = 'Socks';

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

export default MensCollections;
