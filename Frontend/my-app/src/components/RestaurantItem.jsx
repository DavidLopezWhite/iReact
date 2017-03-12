import React, {Component} from 'react';
import {Link} from 'react-router';


export default class RestaurantItem extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <Link to="/create" activeClassName="is-active">Reserve</Link>
      </div>
    )
  }
}
