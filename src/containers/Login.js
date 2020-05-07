import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginUser } from '../redux/loginActions'

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    login: user => dispatch(loginUser(user))
})


export default connect(mapState, mapDispatch)(Login);