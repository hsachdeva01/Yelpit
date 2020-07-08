import { connect } from "react-redux";

import { fetchBusinesses, fetchBusiness } from "../../actions/business_actions";
import BusinessIndex from "./business_index";

const mapStateToProps = state => ({
  business: Object.values(state.entities.businesses) || [],
  // businessId: ownProps.props.match.params.businessId
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
