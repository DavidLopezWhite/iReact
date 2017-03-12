import React, {Component} from 'react';

export default class RestaurantItem extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
