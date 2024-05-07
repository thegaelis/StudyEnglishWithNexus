import { LOGINSUCCESS, LOGINFAILED, REGISTERSUCCESS, REGISTERFAILED, LOGOUT } from "./actionType";


// Declare type of each action and payload
export const loginSuccess = (email) => ({
    type: LOGINSUCCESS,
    payload: email,
})
export const loginFailed = () => ({
    type: LOGINFAILED,
})
export const registerSuccess = (email) => ({
    type: REGISTERSUCCESS,
    payload: email,
})
export const registerFailed = () => ({
    type: REGISTERFAILED,
})
export const logout = () => ({
    type: LOGOUT,
})