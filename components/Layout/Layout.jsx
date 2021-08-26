import Head from 'next/head';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

import { useProductsContext } from '../../contexts/products_context';
import { pageTransition } from '../../utils/animations';

const DynamicProductModal = dynamic(() =>
  import('../ProductModal/ProductModal')
);

const Layout = ({ title, children, description }) => {
  const { isProductModalOpen } = useProductsContext();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <AnimatePresence initial={false}>
          {isProductModalOpen && <DynamicProductModal />}
        </AnimatePresence>
        <motion.main
          variants={pageTransition}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'linear' }}>
          {children}
        </motion.main>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'BYLT Basics™ - Premium Basics',
  description:
    "Men's Basics are evolving. BYLT Underwear and BYLT Shirts. Get BYLT's new line of Men's Premium Basics online at a fair price. BYLT™ - Confidence starts here™",
};

export default Layout;
