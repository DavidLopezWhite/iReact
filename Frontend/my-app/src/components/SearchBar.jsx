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
        <input type="text" name="city" placeholder="enter city or address" ref={input => this.searchTerm = input}/>
        <input type="text" name="number" placeholder="number in party" ref={input => this.number = input}/>
        <button type="submit">Find a table</button>

        <div>...Finding restaurants in your area</div>
        <div>Loader</div>
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