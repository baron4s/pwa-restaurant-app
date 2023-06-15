import DataRestaurant from '../data/api-restaurant';
import API_ENDPOINT from '../globals/api-endpoint';

const AddReview = {
  async init(review) {
    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };
      const respons = await fetch(`${API_ENDPOINT.ADD_NEW_REVIEW}`, option);
      const responseJson = await respons.json();
      this._getAllReview(review);
      // eslint-disable-next-line no-alert
      alert(`${responseJson.message} mengirim`);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`${error.message} Periksa koneksi anda`);
    }
  },
  async _getAllReview(review) {
    const dataDetail = await DataRestaurant.getDetailRestaurants(review.id);
    const dataDetailReview = dataDetail.customerReviews;
    const getElementReview = document.querySelector('.customer-reviews__card-list');
    getElementReview.innerHTML = '';
    dataDetailReview.forEach((reviews) => {
      getElementReview.innerHTML += `
    <div class="customer-reviews__card-item">
              <q>${reviews.review}</q>
              <p class="name-customer"><i class="fa-solid fa-circle-user"></i><span>${reviews.name}</span></p>
            </div>
    `;
    });
  },
};

export default AddReview;
