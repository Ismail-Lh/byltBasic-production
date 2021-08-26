import dynamic from 'next/dynamic';
import { useAuthContext } from '../../contexts/auth_context';

import classes from './UserAccount.module.scss';

const DynamicAlert = dynamic(() => import('../../components/Alert/Alert'));

const DynamicUserAccountInfo = dynamic(() =>
  import('../../components/UserAccountInfo/UserAccountInfo')
);
const DynamicUserAccountOrders = dynamic(() =>
  import('../../components/UserAccountOrders/UserAccountOrders')
);

const UserAccount = () => {
  const { err } = useAuthContext();

  return (
    <div className='container'>
      {err && <DynamicAlert error>{err}</DynamicAlert>}

      <div className={classes.account__grid}>
        <DynamicUserAccountInfo />

        <DynamicUserAccountOrders />
      </div>
    </div>
  );
};

export default UserAccount;
