import Panel from '../components/Panel/Panel';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(Panel);