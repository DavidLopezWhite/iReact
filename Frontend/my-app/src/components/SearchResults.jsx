import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';

export class SearchBar extends Component {
  onSubmit(e) {
    e.preventDefault();

    let { dispatch } = this.props;
    dispatch(actions.onStartSearch(this.searchTerm.value));
  }
  render() {
    return (
      <div>Search Results for {numOfGuests} guests in {address}</div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(SearchBar);