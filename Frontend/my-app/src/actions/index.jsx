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
    // return restaurantAPI.getRestaurants(searchTerm)
      // .then((restaurants) => {
        // console.log(restaurants);
        // dispatch(listRestaurants([{name: 'restaurant'}]));
      // });
    return dispatch(listRestaurants(restaurantAPI.getRestaurants(searchTerm)));
  }
}