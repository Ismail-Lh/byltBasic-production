import dynamic from 'next/dynamic';

import classes from './AccountPageContainer.module.scss';

import { useAuthContext } from '../../contexts/auth_context';

const DynamicLoader = dynamic(() => import('../../components/Loader/Loader'));
const DynamicUserAccount = dynamic(() =>
  import('../../components/UserAccount/UserAccount')
);

const AccountPageContainer = () => {
  const { loading } = useAuthContext();

  return (
    <div className={classes.account__container}>
      {loading ? (
        <DynamicLoader message='please until your log out...' />
      ) : (
        <DynamicUserAccount />
      )}
    </div>
  );
};

export default AccountPageContainer;
