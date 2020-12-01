import AccountView from '../components/AccountView/AccountView';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(AccountView);