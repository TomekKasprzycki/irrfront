import Test from '../components/Test';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(Test);