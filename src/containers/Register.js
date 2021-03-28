import { connect } from 'react-redux'
import Registration from '../components/Registration'
import { createUser } from '../actions/auth'

const mapStateToProps = (state) => ({
  user: state.user.user
})
const mapDispatchToProps = {
  createUser: createUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)
