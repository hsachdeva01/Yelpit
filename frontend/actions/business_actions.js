import * as B_APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
});


export const fetchBusiness = businessId => dispatch => (
  B_APIUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
);

export const fetchBusinesses = () => dispatch => (
  B_APIUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveAllBusinesses(businesses)))
);