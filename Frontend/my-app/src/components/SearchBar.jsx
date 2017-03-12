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
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" name="search" ref={input => this.searchTerm = input}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(SearchBar);