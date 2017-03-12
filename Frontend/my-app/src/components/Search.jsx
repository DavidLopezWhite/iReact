import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';

import styled from 'styled-components';

export default class Search extends Component {

  render() {
    return (
      <Wrap>
          <SearchBar/>
          <RestaurantList/>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
    max-width 900px;
    padding: 0 3%;
`;
