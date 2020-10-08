
import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions"
import ReviewForm from "./review_form";
import { fetchBusiness } from '../../actions/business_actions'
import React from 'react';



const mapStateToProps = (state, ownProps) => ({
  formType: "Post Review",
  user: state.entities.users[state.session.id],
  business: state.entities.businesses[ownProps.match.params.businessId] || {},
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => {
  return {
    processReview: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    clearReviewErrors: () => dispatch(clearErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)