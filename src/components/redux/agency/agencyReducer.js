import Cookies from 'js-cookie';
import { LOGIN, LOGOUT } from './agencyType';

const initialState = {
  is_connected_agency: Cookies.get('Bearer_agency') ? true : false,
  id: Cookies.get('agency_id') || null,
  email: Cookies.get('email_agency') || null,
  bearer: Cookies.get('Bearer_agency') || null
};

const agencyReducer = (state = initialState, action) => {
  switch (action.type.type) {
    case LOGIN:
      return {
        is_connected_agency: true,
        bearer: Cookies.get('Bearer_agency'),
        id: Cookies.get('agency_id'),
        email: Cookies.get('email_agency'),
      };
    case LOGOUT:
      Cookies.remove('Bearer_agency');
      Cookies.remove('agency_id');
      Cookies.remove('email_agency');
      return {
        is_connected_agency: false,
        bearer: null,
        id: null,
        email: null,
      };
    default:
      return state;
  }
};

export default agencyReducer;
