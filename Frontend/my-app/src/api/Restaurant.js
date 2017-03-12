import axios from 'axios';


module.exports = {
  getRestaurants(searchTerm) {
    return axios.get(`https://65i1ix2dr5.execute-api.us-east-1.amazonaws.com/dev/api/search/${searchTerm}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Access-Control-*',
        'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept'
      }
    });
  },

  reserveTiming(restaurantId, timing, body){
    return axios.post(`/api/search/${restaurantId}`);
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
