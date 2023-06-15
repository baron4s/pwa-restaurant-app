import CONFIG from '../../globals/config';

const createItemRestaurant = (restaurants) => `
  <div class="card">
    <div class="city color-2" tabindex="0">
      <span>${restaurants.city}</span>
    </div>
    <img class="card-img-top" tabindex="0" src="${CONFIG.BASE_PICTURE_URL + restaurants.pictureId}" alt="${restaurants.name}" width="100%" height="300px" />
    <div class="card-body">
      <p class="card-title">
      <a href="#/detail/${restaurants.id}">
        ${restaurants.name}
      </a>
      </p>
      <p class="rating " tabindex="0">
        ⭐️ ${restaurants.rating}
      </p>
      <p class="card-text" tabindex="0">
        ${restaurants.description}
      </p>
    <a class="btn view-detail" href="#/detail/${restaurants.id}">View Detail</a>
    </div>
  </div>
`;

const createDetailRestaurant = (restaurant) => ` 
        <div class="picture-detail__restaurant">
          <img src="${CONFIG.BASE_PICTURE_URL + restaurant.pictureId}" alt="picutre" tabindex="0" />
          <div id="likeButtonRestaurant"></div>
        </div>
        <div class="restaurant-detail">
          <h2 class="restaurant-detail__name" tabindex="0">${restaurant.name}</h2>
          <p class="restaurant-detail__ratingCity">
            <span class="rating-value" tabindex="0">⭐️${restaurant.rating}</span><span class="city-name" tabindex="0"><i class="fa-sharp fa-solid fa-city" aria-hidden="true"></i>${restaurant.city}</span>
          </p>
          <p class="restaurant-detail__description" tabindex="0">
            ${restaurant.description}
          </p>
        </div>
        <div class="restaurant-menu">
          <h2 tabindex="0">Menu</h2>
          <div class="wrapper-restaurant-menu">
            <div class="restaurant-menu__foods">
              <h3 tabindex="0">Foods</h3>
              <ul class="list-foods">
              ${restaurant.menus.foods
    .map(
      (foods) => `
              <li tabindex="0">${foods.name}</li>`,
    )
    .join('')}
              </ul>
            </div>
            <div class="restaurant-menu__drinks">
              <h3 tabindex="0">Drinks</h3>
               <ul class="list-drinks">

              ${restaurant.menus.drinks
    .map(
      (drinks) => `
                <li tabindex="0">${drinks.name}</li>`,
    )
    .join('')}

              </ul>
            </div>
          </div>
        </div>
        <section class="customer-reviews">
          <h2 tabindex="0">Customer Reviews</h2>
          <div class="customer-reviews__card-list">
          ${restaurant.customerReviews
    .map(
      (reviews) => `
          <div class="customer-reviews__card-item">
              <q tabindex="0">${reviews.review}</q>
              <p class="name-customer" tabindex="0"><i class="fa-solid fa-circle-user" aria-hidden="true"></i><span>${reviews.name}</span></p>
            </div>
          `,
    )
    .join('')}
          </div>
        </section>
        <section class="review-section">
          <h2 tabindex="0">Kirim Ulasan</h2>
          <form id="submitReview">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />

            <label for="review">Ulasan:</label>
            <textarea id="review" name="review" placeholder="Add you review........................." required></textarea>

            <button type="submit">Kirim</button>
          </form>
        </section>`;

const createLikeButton = () => `
        <button aria-label="like this restaurant" id="likeButton" class="like">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
`;

const createLikedButton = () => `
      <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
`;

export {
  createItemRestaurant,
  createDetailRestaurant,
  createLikedButton,
  createLikeButton,
};
