import IrrPreview from '../components/IrrPreview';
import { connect } from 'react-redux';

const mapState = (state) => ({
    user: state.login,
    irr_docs: state.irr_docs,
    irr_types: state.irr_types
})

export default connect(mapState)(IrrPreview);