/* eslint-disable arrow-body-style */
import { LOGIN, LOGOUT } from './agencyType';

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
