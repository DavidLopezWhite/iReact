import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';


export default class Search extends Component {

  render() {
    return (
      <div>
          <SearchBar/>
          <RestaurantList/>
      </div>
    )
  }
}
