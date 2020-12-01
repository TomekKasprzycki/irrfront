import Header from '../components/Header/Header';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login,
})

export default connect(mapState)(Header);
