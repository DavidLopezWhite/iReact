import React, {Component} from 'react';
import {connect} from 'react-redux';


const SearchResultText = (props) => {
    const {amount, address} = props;

    return(
      <div>
          Search Results for {amount} guests in {address}
      </div>
    )
}

export default SearchResultText;
