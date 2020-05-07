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

    
    let users = []
    fetch(url)
        .then(response => response.json())
        .then(data => users.push(data))
        .catch('error')

    const userToCheck = users.filter(user => user.email === userDto.email)

      console.log('user to check: ' + userToCheck)

    if(userToCheck.password === userDto.password){
      console.log('weszło')
      dispatch(loginProcess(userDto))
    } else {
      alert("Niepoprawny email lub hasło!")
    }

    console.log(users)

    }

export { LOGIN_HAS_BEGUN, loginHasBegun, LOGIN, loginProcess, LOGIN_ERROR, loginFailed, loginUser }