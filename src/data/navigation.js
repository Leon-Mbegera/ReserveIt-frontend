import { useSelector } from 'react-redux';

const navigation = () => {
  const { user } = useSelector((state) => state);
  const { username } = user;
  if (username) {
    return ['models', 'MyReservations', 'signout'];
  } return ['models', 'MyReservations', 'signin', 'signup'];
};

export default navigation;
