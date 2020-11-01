import AdminPanel from '../components/AdminPanel/AdminPanel';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(AdminPanel);