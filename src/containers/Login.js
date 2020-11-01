import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { loginUser, logoutProcess } from '../redux/loginActions'
import { fetchAllTypes, fetchAllDocs } from '../redux/dropListsActions'

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    login: user => dispatch(loginUser(user)),
    logout: () => dispatch(logoutProcess()),
    getDocs: () => dispatch(fetchAllDocs()),
    getTypes: () => dispatch(fetchAllTypes())
})


export default connect(mapState, mapDispatch)(Login);