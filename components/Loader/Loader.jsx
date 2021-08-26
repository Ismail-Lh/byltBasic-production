import RingLoader from 'react-spinners/RingLoader';

import classes from './Loader.module.scss';

const Loader = ({ message }) => {
  return (
    <div className={classes.loader}>
      <RingLoader color='#29527c' size={100} />
      <p>{message}</p>
    </div>
  );
};

export default Loader;
