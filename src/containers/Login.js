import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginProcess } from '../redux/loginActions'

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    login: user => dispatch(loginProcess(user))
})


export default connect(mapState, mapDispatch)(Login);