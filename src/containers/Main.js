import {connect} from 'react-redux'
import Main from './../components/Main/Main'

const mapState = (state) => ({
    user: state.login
})


export default connect(mapState)(Main)