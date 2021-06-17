import Cookies from 'js-cookie';
import { LOGIN_OWNER, LOGOUT_OWNER } from './ownerType';

const initialState = {
  is_connected_owner: Cookies.get('Bearer_owner') ? true : false,
  id: Cookies.get('owner_id') || null,
  building_id: Cookies.get('building_id') || null,
  email: Cookies.get('email_owner') || null,
  bearer: Cookies.get('Bearer_owner') || null
};

const ownerReducer = (state = initialState, action) => {
  switch (action.type.type) {
    case LOGIN_OWNER:
      return {
        is_connected_owner: true,
        bearer: Cookies.get('Bearer_owner'),
        id: Cookies.get('owner_id'),
        building_id: Cookies.get('building_id'),
        email: Cookies.get('email_owner'),
      };
    case LOGOUT_OWNER:
      Cookies.remove('Bearer_owner');
      Cookies.remove('owner_id');
      Cookies.remove('email_owner');
      Cookies.remove('building_id');
      return {
        is_connected_owner: false,
        bearer: null,
        id: null,
        email: null,
        building_id: null,
      };
    default:
      return state;
  }
};

export default ownerReducer;
