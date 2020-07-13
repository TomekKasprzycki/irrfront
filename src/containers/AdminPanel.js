import AdminPanel from '../components/AdminPanel';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(AdminPanel);