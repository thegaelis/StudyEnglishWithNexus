import { loginSuccess, loginFailed, registerSuccess, registerFailed, logout } from "../action/auth.js";
import { getLevel, setLevel } from "../action/data.js";

//Declare initial state
const initialState = {
    email:'',
    isAuthenticated:false,
    level: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'LOGINSUCCESS':
            {
                return{
                    ...state,
                    email: action.payload,
                    isAuthenticated: true,
                }

            };
           
        case 'LOGINFAILED':
           
            return {
                ...state,
                email: '',
                isAuthenticated: false,
            };
        case 'REGISTERSUCCESS':
            
            return {
                ...state,
                email: action.payload,
                isAuthenticated: true,
                
            }
        case 'REGISTERFAILED':
           
            return {
                ...state,
                email:'',
                isAuthenticated: false,

            };
        case 'LOGOUT':
            
            return {
                ...state,
                email:'',
                isAuthenticated: false,
                level:0,
            };
        case 'GETLEVEL':
            return {
                ...state,
                email: action.payload,

                };
        case 'SETLEVEL':
            
            return {
                ...state,

                email: action.email,
                level: action.level,

                };
        default:
            return state;
    }
}

export default rootReducer;