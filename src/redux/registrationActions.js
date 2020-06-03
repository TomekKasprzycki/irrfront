const REGISTRATION_HAS_BEGUN = '[registration] starting process'
const REGISTER = '[registration] register'
const REGISTER_ERROR = '[registration] registration has failed'

const registrationHasBegun = () => ({
    type: REGISTRATION_HAS_BEGUN
})

const registerProcess = (userDto) => ({
    type: REGISTER,
    userDto
})

const registrationFailed = () => ({
    type: REGISTER_ERROR
})

const registerUser = (userDto) => (dispatch) => {
    const url = 'http://localhost:3001/users'

    dispatch(registrationHasBegun());
    
    console.log('niby leci akcja')
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDto),
      })
      .then((response) => response.json())
      .then((userDto) => {
        registerProcess(userDto);
        console.log('Success:', userDto);
      })
      .catch((error) => {
        registrationFailed();
        console.error('Error:', userDto);
      });
    }

export { REGISTRATION_HAS_BEGUN, registrationHasBegun, REGISTER, registerProcess, REGISTER_ERROR, registrationFailed, registerUser };