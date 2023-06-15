import API_ENDPOINT from '../globals/api-endpoint';

class DataRestaurant {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id), {
      method: 'GET',
      cache: 'no-cache',
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DataRestaurant;
