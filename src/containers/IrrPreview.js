import IrrPreview from '../components/IrrPreview/IrrPreview';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(IrrPreview);