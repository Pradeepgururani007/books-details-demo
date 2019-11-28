import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DetailsPage from '../components/DetailsPage/detailsPage'

function mapStateToProps(state) {
    return {
        selectedData: state.bookDetails.selectedData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsPage)
