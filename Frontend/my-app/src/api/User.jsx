import axios from 'axios';


// getRestaurants - fetch a list of restaurants
// reserveTiming - Reserve the restaurant timing 
// getMenu - Get the menu of the restaurant
module.exports = {
  getRestaurants(uuid) {
    return [
    {
      name: 'Restaurant 1',
      timings: [{
        '5.00pm': true,
        '5.30pm': false,
        '6.00pm': true,
        '6.30pm': false,
        '7.00pm': true,
        '7.30pm': false,
      }]

    },
    {
      name: 'Restaurant 2',
      timings: [{
        '5.00pm': true,
        '5.30pm': true,
        '6.00pm': true,
        '6.30pm': false,
        '7.00pm': false,
        '7.30pm': false,
      }]
    }
    ];
    // return axios.get(`/api/search/${searchTerm}`)
  },

  reserveTiming(restaurantId, timing, body){
    return [{'success': true}];
  }

  getMenu(restaurantId) {
    return [
    {
      name: 'Ramen',
      price: '$3.50'

    },
    {
      name: 'Noodles',
      price: '$6.00'
    }
    ];
  }
}


 