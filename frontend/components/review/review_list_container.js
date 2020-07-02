import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewList from './review_list';
import { isObject } from 'util';

const mapStateToProps = state => ({
  business: state.entities.businesses[ownProps.match.params.businessId] || {},
  users: Object.values(state.entities.users),
  reviews: Object.values(state.entities.reviews),
  user_id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchReviews: businessId => dispatch(fetchReviews(businessId)),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);