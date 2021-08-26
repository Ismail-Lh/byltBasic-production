import dynamic from 'next/dynamic';
import classes from './PageNotFoundContainer.module.scss';

const Button = dynamic(() => import('../../components/Button/Button'));

const PageNotFoundContainer = () => {
  return (
    <div className={classes.pageContainer}>
      <div className='container'>
        <div className={classes.pageContainer__content}>
          <h1>404 page not found</h1>
          <p>We're sorry, but the page you requested could not be found.</p>
          <Button route='/'>go to the home page</Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundContainer;
