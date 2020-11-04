import NotFound from './../components/NotFound/NotFound'
import { connect } from 'react-redux'

const mapState = (state) => ({
    user: state.login
})

export default connect(mapState)(NotFound);