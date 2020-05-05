import { connect } from "react-redux";
import BusinessHeader from "./business_header";
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
  // currentUser: entities.users[session.id]
  currentUser: state.entities.users[state.session.id]
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessHeader);
