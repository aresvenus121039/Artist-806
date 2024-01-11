import {
  selectIsUserSignedIn,
  selectSignedInUser,
} from '@/store/reducers/userReducers';
import { useSelector } from 'react-redux';

export const isAuthenticated = () => {
  const isUserSignedIn = useSelector(selectIsUserSignedIn);
  const userData = useSelector(selectSignedInUser);

  return { isAuth: isUserSignedIn, user: userData };
};
