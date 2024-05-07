import { GETLEVEL, SETLEVEL } from "./actionType";

// Declare type of each action and payload
export const getLevel = (email) => ({
    type: GETLEVEL,
    payload: email,
})
export const setLevel = (email,level) => ({
    type: SETLEVEL,
    email: email,
    level: level,
})

