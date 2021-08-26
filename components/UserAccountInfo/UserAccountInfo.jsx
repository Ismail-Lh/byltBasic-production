import { useRouter } from 'next/router';
import classes from './UserAccountInfo.module.scss';

import { useAuthContext } from '../../contexts/auth_context';
import { Button } from '..';

const UserAccountInfo = () => {
  const { logout, user, setErr, setLoading } = useAuthContext();
  const router = useRouter();

  const handelLogout = async () => {
    try {
      setErr('');
      setLoading(true);
      await logout();
      router.push('/account/login');
      setLoading(false);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className={classes.account__user}>
      <h2>account info</h2>
      <div className={classes.userInfo}>
        <p>
          <span>user name:</span> {user.displayName}
        </p>
        <p>
          <span>user email address:</span> {user.email}
        </p>
      </div>

      <Button handelClick={handelLogout}>log out</Button>
    </div>
  );
};

export default UserAccountInfo;
