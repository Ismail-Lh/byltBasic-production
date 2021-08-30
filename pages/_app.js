import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss';

import { AuthProvider } from '../contexts/auth_context';
import { ProductsProvider } from '../contexts/products_context';
import { FiltersProvider } from '../contexts/filters_context';
import { CartProvider } from '../contexts/cart_context';

const DynamicNavBar = dynamic(() => import('../components/NavBar/NavBar'));

const DynamicScrollToTop = dynamic(() =>
  import('../components/ScrollToTop/ScrollToTop')
);

const DynamicFooterSection = dynamic(() =>
  import('../sections/FooterSection/FooterSection')
);

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <DynamicNavBar />
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <DynamicScrollToTop />
            <DynamicFooterSection />
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default MyApp;
