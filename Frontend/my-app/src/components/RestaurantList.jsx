import React, {Component} from 'react';
import RestaurantItem from './RestaurantItem';
import {connect} from 'react-redux';

export class RestaurantList extends Component {
  render() {
    const {restaurantList} = this.props;
    
    const renderRestaurants = () => {
      console.log(restaurantList + "hello");
      return restaurantList.map((restaurant, index) => {
        return (<RestaurantItem key={index} {...restaurant}/>);
      })
    };

    return (
      <div>
        {renderRestaurants()}
      </div>
    )
  }
}

export default connect((state) => state)(RestaurantList);