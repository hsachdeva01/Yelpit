export const fetchBusiness = businessId => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}`
  })
);

export const fetchBusinesses = () => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/businesses'
  })
};