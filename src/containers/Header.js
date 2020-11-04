import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { logoutProcess } from '../redux/loginActions';

const mapState = (state) => ({
    user: state.login
})

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logoutProcess())
})

export default connect(mapState, mapDispatch)(Header);