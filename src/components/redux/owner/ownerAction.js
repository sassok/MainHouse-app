/* eslint-disable arrow-body-style */
import { LOGIN_OWNER, LOGOUT_OWNER } from './ownerType';

export const login_owner = () => {
  return {
    type: LOGIN_OWNER,
  };
};

export const logout_owner = () => {
  return {
    type: LOGOUT_OWNER,
  };
};
