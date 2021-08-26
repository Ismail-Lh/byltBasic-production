import classes from './Register.module.scss';
import { Button } from '..';

const Register = () => {
  return (
    <div className={classes.register}>
      <h1>new customers</h1>
      <p className={classes.register__text}>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>
      <Button color='black' route='/account/register'>
        creat account
      </Button>
    </div>
  );
};

export default Register;
