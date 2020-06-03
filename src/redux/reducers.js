import { LOGIN, LOGIN_HAS_BEGUN, LOGIN_ERROR } from './loginActions'
import { REGISTRATION_HAS_BEGUN, REGISTER } from './registrationActions'
import { combineReducers } from 'redux'


const loginState = {
  firstName: '',
  lastName: '',
  email: '',
  roleDto: '',
  institutionDto: '',
  send: false,
  TOKEN: ''
}


const login = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_HAS_BEGUN:
      return state = {
        send: true
      };
    case LOGIN:
      console.log('logowanie')
      console.log(action.userDto)
      state = {
        firstName: action.userDto.firstName,
        lastName: action.userDto.lastName,
        email: action.userDto.email,
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

const registerState = {
  send: false,
  user: {}
}

const register = (state = inistState, action) => {
  switch (action.type) {
    case REGISTRATION_HAS_BEGUN:
      
      return state = {
        send: true
      };

    case REGISTER:
  
      return state = {
        user: action.userDto
      }

    default:
      return inistState;
  }
}


  export default combineReducers({
    login,
    register}
)