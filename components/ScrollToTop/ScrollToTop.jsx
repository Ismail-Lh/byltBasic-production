import { useState } from 'react';
import { BiUpArrowIcon } from '../../Icons';
import classes from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible && (
        <div className={classes.scrollToTop} onClick={scrollToTop}>
          <BiUpArrowIcon />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
