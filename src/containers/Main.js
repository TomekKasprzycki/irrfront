import {connect} from 'react-redux';
import Main from './../components/Main/Main';
import { logoutProcess } from '../redux/loginActions';

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logoutProcess())
})

export default connect(mapState, mapDispatch)(Main);