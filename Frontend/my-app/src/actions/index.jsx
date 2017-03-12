import restaurantAPI from '../api/Restaurant';

export const listRestaurants = (restaurants) => {
  return {
    type: 'LIST_RESTAURANTS',
    restaurants
  }
}

export const onStartSearch = (searchTerm) => {
  return (dispatch, getState) => {
    // To be changed back for PROMISES to work
    return restaurantAPI.getRestaurants(searchTerm)
      .then((res) => {
          debugger;
        dispatch(restaurantAPI.getRestaurants(res.data.restaurants));
        window.location = '/search';
      });
    // return dispatch(listRestaurants(restaurantAPI.getRestaurants(searchTerm)));
  }
}
