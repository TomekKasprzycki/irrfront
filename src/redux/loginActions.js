const LOGIN_HAS_BEGUN = '[login] starting process'
const LOGIN = '[login] login'
const LOGIN_ERROR = '[login] on error'


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


const loginUser = (userDto) => (dispatch) => {
    const url = 'http://localhost:3001/users'

    dispatch(loginHasBegun());
    setTimeout(dispatch(loginProcess(userDto)),2000)
    

    
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDto),
      })
      .then((response) => response.json())
      .then((userDto) => {
        loginProcess(userDto);
        console.log('Success:', userDto);
      })
      .catch((error) => {
        loginFailed();
        console.error('Error:', userDto);
      });
    }

export { LOGIN_HAS_BEGUN, loginHasBegun, LOGIN, loginProcess, LOGIN_ERROR, loginFailed, loginUser }