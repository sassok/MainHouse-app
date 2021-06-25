import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout_owner } from '../../components/redux';

const DeleteOwnerSession = () => {
  const dispatch = useDispatch();
  const history = useHistory();
    dispatch({ type: logout_owner() });
      history.push('/');
  
console.log("bonjour");
  return null;

};

export default DeleteOwnerSession;