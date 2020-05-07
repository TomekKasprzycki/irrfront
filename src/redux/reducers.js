import { LOGIN, LOGIN_HAS_BEGUN, LOGIN_ERROR } from './loginActions'
import { REGISTRATION_HAS_BEGUN, REGISTER } from './registrationActions'
import { combineReducers } from 'redux'


const inistState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  password2: '',
  roleDto: '',
  active: '',
  institutionDto: '',
  send: false,
  TOKEN: ''
}


const login = (state = inistState, action) => {
  switch (action.type) {
    case LOGIN_HAS_BEGUN:
      return state = {
        send: true
      };
    case LOGIN:
      console.log('logowanie')
      state = {
        email: action.userDto.login,
        password: action.userDto.password,
        TOKEN: 'jakis token'
      }
      console.log(state)
      return state;
    case LOGIN_ERROR:
      return inistState;

    default:
      return state;
  }
}

const register = (state = inistState, action) => {
  switch (action.type) {
    case REGISTRATION_HAS_BEGUN:
      
      return state = {
        send: true
      };

    case REGISTER:
  
      return state = {
        login: action.userDto.login
      }

    default:
      return inistState;
  }
}


  export default combineReducers({
    login,
    register}
)