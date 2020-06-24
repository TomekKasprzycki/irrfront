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


const getUsers = async (userDto) => {
    const url = 'http://localhost:3001/users'

    const result = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDto),
      })
    const user = await result.json();

    // const userToCheck = await users.filter(user => user.email === userDto.email)[0]

    return user;
}

const loginUser = (userDto) => (dispatch) => {


    dispatch(loginHasBegun());


    getUsers(userDto).then(result => dispatch(loginProcess(result)));


    }

export { LOGIN_HAS_BEGUN, loginHasBegun, LOGIN, loginProcess, LOGIN_ERROR, loginFailed, loginUser }