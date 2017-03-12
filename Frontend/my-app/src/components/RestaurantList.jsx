import React, {Component} from 'react';
import RestaurantItem from './RestaurantItem';
import {connect} from 'react-redux';

export class RestaurantList extends Component {
    render() {
        const {listRestaurants} = this.props;

        const renderRestaurants = () => {
          return listRestaurants.map((restaurant, index) => {
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

export default connect(
    (state) => {
        return {
            listRestaurants: state.listRestaurants
        }
    }
)(RestaurantList);
