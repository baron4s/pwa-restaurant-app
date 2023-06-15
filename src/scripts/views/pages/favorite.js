import FavoriteRestaurantIdb from '../../data/favorite-idb-restaurant';
import { createItemRestaurant } from '../templates/content-creator';

const Favorite = {
  async render() {
    return `
    <div class="restaurant">
      <h1 class="t-align">Restaurants Favorites</h1>
      <section class="restaurant_card-list" id="containerRestaurantFavorite">
      </section>
     </div>
    `;
  },

  async afterRender() {
    const dataFavoriteIdb = await FavoriteRestaurantIdb.getAllRestaurants();
    const containerRestaurantFavorite = document.getElementById('containerRestaurantFavorite');
    dataFavoriteIdb.forEach((restaurant) => {
      console.log(restaurant);
      containerRestaurantFavorite.innerHTML += createItemRestaurant(restaurant);
    });
  },
};

export default Favorite;
