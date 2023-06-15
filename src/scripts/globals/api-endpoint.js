import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT(id) {
    return `${CONFIG.BASE_URL}detail/${id}`;
  },
  ADD_NEW_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
