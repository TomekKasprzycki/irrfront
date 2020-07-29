import PreviewField from '../components/PreviewField';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => ({
    irrItem: ownProps.irrItem,
    irr_docs: state.irr_docs,
    irr_types: state.irr_types
})

export default connect(mapState)(PreviewField);