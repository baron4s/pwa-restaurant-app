import DataRestaurant from '../../data/api-restaurant';
import { createItemRestaurant } from '../templates/content-creator';

const Home = {
  async render() {
    return `
    <div class="restaurant">
      <h1 class="t-align">Explore Restaurant</h1>
      <section class="restaurant_card-list" id="containerRestaurant">
      </section>
     </div>
    `;
  },

  async afterRender() {
    const listRestaurants = await DataRestaurant.getRestaurantList();
    const elementContainer = document.getElementById('containerRestaurant');
    listRestaurants.forEach((restaurant) => {
      elementContainer.innerHTML += createItemRestaurant(restaurant);
    });
  },
};

export default Home;
