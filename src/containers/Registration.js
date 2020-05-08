import Registration from '../components/Registration';
import { connect } from 'react-redux';
import { registerUser } from '../redux/registrationActions'


const mapDispatch = (dispatch) => ({
    register: user => dispatch(registerUser(user))
})


export default connect(null, mapDispatch)(Registration);