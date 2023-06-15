import DataRestaurant from '../../data/api-restaurant';
import UrlParser from '../../routes/url-parse';
import { createDetailRestaurant } from '../templates/content-creator';
import AddReview from '../../utils/add-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
    <div class="restaurant">
      <div id="detailRestaurant"></div>
    </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await DataRestaurant.getDetailRestaurants(url.id);
    const elementContainerDetail = document.getElementById('detailRestaurant');
    elementContainerDetail.innerHTML = createDetailRestaurant(detailRestaurant);

    LikeButtonInitiator._init({
      likeButtonContainer: document.getElementById('likeButtonRestaurant'),
      restaurant: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        description: detailRestaurant.description,
        pictureId: detailRestaurant.pictureId,
        rating: detailRestaurant.rating,
        city: detailRestaurant.city,
      },
    });

    const submitReviewForm = document.getElementById('submitReview');
    submitReviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const reviewData = {
        id: url.id,
        name: formData.get('name'),
        review: formData.get('review'),
      };
      document.querySelector('#name').value = '';
      document.querySelector('#review').value = '';
      await AddReview.init(reviewData);
    });
  },
};

export default DetailRestaurant;
