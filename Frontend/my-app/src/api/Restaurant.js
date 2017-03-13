import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)

mock.onGet('/api/search', { params: { searchTerm: 'SF' } }).reply(200, {
  restaurants: [
    {
      id: 'rest1',
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
      id: 'rest2',
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
  ]
});

// getRestaurants - fetch a list of restaurants
// reserveTiming - Reserve the restaurant timing 
// getMenu - Get the menu of the restaurant
module.exports = {
  getRestaurants(searchTerm) {
    const config = {
      method: 'get',
      url: `http://localhost:3002/dev/api/search/${searchTerm}`,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
      withCredentials: true,
    }

    return axios.request(config);
  },

  reserveTiming(restaurantId, timing, body){
    return [{
      success: true,
      uuid: 'thisismyorganiserid'
    }];
  },

  getReservation(uuid) {
    return [{
      restaurantId: 'rest1',
      timing: '6.30pm',
      guests: [{
        email: 'david@ireact.com',
        attending: true
      },
      {
        email: 'junxiang@ireact.com',
        attending: true
      }]
    }]
  },

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


 