import { LOGIN, LOGIN_HAS_BEGUN, LOGIN_ERROR, LOGOUT } from './loginActions'
import { GETALLDOCS, GETALLTYPES } from './dropListsActions'
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

const initDocState = []

const irr_docs = (state = initDocState, action) => {
  switch (action.type) {
    case GETALLDOCS:
      console.log(action.payload)
      return state = action.payload;
  
    default:
      return state;
  }
}

const initTypesState = []

const irr_types = (state = initTypesState, action) => {
  switch (action.type) {
    case GETALLTYPES:
      return state = action.payload;
  
    default:
      return state;
  }
}


  export default combineReducers({
    login,
    irr_docs, 
    irr_types}
)