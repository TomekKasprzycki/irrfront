import { LOGIN, LOGIN_HAS_BEGUN, LOGIN_ERROR, LOGOUT } from './loginActions'
import { REGISTRATION_HAS_BEGUN, REGISTER } from './registrationActions'
import { combineReducers } from 'redux'


const loginState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  roleId: '',
  token: ''
}


const login = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_HAS_BEGUN:
      return state;
    case LOGIN:
      console.log('logowanie')
      console.log(action.userDto)
      state = {
        name: action.userDto.name,
        email: action.userDto.email,
        roleId: action.userDto.roleId,
        token: action.userDto.token
      }
      console.log(state)
      return state;
    case LOGIN_ERROR:
      return loginState;
    case LOGOUT:
      return state = loginState;

    default:
      return state;
  }
}

const registerState = {
  send: false,
  user: {}
}

const register = (state = registerState, action) => {
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
      return registerState;
  }
}


  export default combineReducers({
    login,
    register}
)