export const listRestaurantsReducer = (state=[], actions) => {
  switch(actions.type) {
    case 'LIST_RESTAURANTS':
      return actions.restaurants;
    default:
      return state;
  }
  
}
