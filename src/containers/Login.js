import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginUser, logoutProcess } from '../redux/loginActions'

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    login: user => dispatch(loginUser(user)),
    logout: () => dispatch(logoutProcess())
})


export default connect(mapState, mapDispatch)(Login);