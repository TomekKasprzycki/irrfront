import UsersPanel from '../components/UsersPanel/UsersPanel';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(UsersPanel);