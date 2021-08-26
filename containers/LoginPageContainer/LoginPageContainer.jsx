import dynamic from 'next/dynamic';

import classes from './LoginPageContainer.module.scss';

const Login = dynamic(() => import('../../components/Login/Login'));

const LoginPageContainer = () => {
  return (
    <div className={classes.login__container}>
      <div className='container'>
        <div className={classes.login__grid}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
