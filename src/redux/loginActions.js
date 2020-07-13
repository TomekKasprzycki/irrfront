const LOGIN_HAS_BEGUN = '[login] starting process'
const LOGIN = '[login] login'
const LOGIN_ERROR = '[login] on error'
const LOGOUT = '[login] logout'


const loginHasBegun = () => ({
    type: LOGIN_HAS_BEGUN
})

const loginProcess = (userDto) => ({
    type: LOGIN,
    userDto
})

const loginFailed = () => ({
  type: LOGIN_ERROR
})

const logoutProcess = () => ({
  type: LOGOUT
})


const getUser = async (userDto) => {
    const url = 'http://localhost:3001/users'

    return fetch(url + "?email=" + `${userDto.email}`, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'TYPE': 'Login',
        },
        body: JSON.stringify(userDto)})
        .then(result => result.json())
        .then(result => result[0]);

}

const loginUser = (userDto) => (dispatch) => {


    dispatch(loginHasBegun());

    console.log("Zaczynamy pobieranie" + userDto.email)

    getUser(userDto)
      .then(result => dispatch(loginProcess(result)));

    

    console.log("pobieranie zakończone")

    }

export { LOGIN_HAS_BEGUN, 
         LOGIN,  
         LOGIN_ERROR, 
         LOGOUT,
         loginFailed, 
         loginProcess,
         loginHasBegun, 
         loginUser,
         logoutProcess }