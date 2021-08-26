import { useRouter } from 'next/router';
import { useAuthContext } from '../contexts/auth_context';

const PrivateRoute = Component => {
  return props => {
    const { user } = useAuthContext();

    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      // If there is no user redirect to "/account/login" page.
      if (!user) {
        Router.push('/account/login');
        return null;
      }

      // If this is an user we just render the component that was passed with all its props
      return <Component {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default PrivateRoute;
