export const fetchBusiness = businessId => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}`
  })
);

export const fetchBusinesses = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses'
  })
};