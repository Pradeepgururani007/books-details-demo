import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home/home'
import {
  getBooksData,
  setSelectedData
} from '../actions/index'

function mapStateToProps(state) {
  return {
    booksData: state.bookDetails.booksData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooksData , setSelectedData}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
