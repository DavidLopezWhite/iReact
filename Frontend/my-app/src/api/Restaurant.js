import axios from 'axios';

module.exports = {
  getRestaurants(searchTerm) {
    return [
    {
      name: 'Restaurant 1'
    },
    {
      name: 'Restaurant 2'
    }
    ];
    // return axios.get(`/api/search/${searchTerm}`)
  } 
}


 