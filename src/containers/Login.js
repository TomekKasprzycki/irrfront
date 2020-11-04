import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { loginUser } from '../redux/loginActions'
import { fetchAllTypes, fetchAllDocs } from '../redux/dropListsActions'

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    login: user => dispatch(loginUser(user)),
    getDocs: () => dispatch(fetchAllDocs()),
    getTypes: () => dispatch(fetchAllTypes())
})


export default connect(mapState, mapDispatch)(Login);