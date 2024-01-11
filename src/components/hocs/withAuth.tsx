import { isAuthenticated } from '@/utility/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function withAuth(Component: any) {
  return function withAuth(props: any) {
    const { isAuth } = isAuthenticated();
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        if (!isAuth) {
          router.replace({
            pathname: '/login',
            query: { from: router.asPath },
          });
        }
      };
      checkAuth();
    }, [isAuth]);

    if (!isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
}
