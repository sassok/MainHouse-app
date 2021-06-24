import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../components/redux';

const DeleteAgencySession = () => {
  const agency = useSelector((state) => state.agency);
  const dispatch = useDispatch();
  const history = useHistory();
    dispatch({ type: logout() });
      history.push('/');
  

  return null;

};

export default DeleteAgencySession;
