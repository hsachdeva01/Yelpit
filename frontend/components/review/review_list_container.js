import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewList from './review_list';
import { receiveComments} from '../../actions/comment_actions';

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
  receiveComments: () => dispatch(receiveComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);