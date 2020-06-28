import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setSignOutUser = user => ({
    type: UserActionTypes.SET_SIGNOUT_USER,
    payload: user
});

