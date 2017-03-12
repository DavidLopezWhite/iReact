import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Timing from './Timing'
import * as actions from '../actions';

export class Restaurant extends Component {
  onSubmit(e) {
    e.preventDefault();

    let { dispatch } = this.props;
    dispatch(actions.onStartSearch(this.searchTerm.value));
  }
  render() {
    return (
      <div>
        <div>{name}</div>
        <div>{address}</div>
        <div>
          <img src=""/>
          <Timing />
        </div>
        <div>Rating</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Restaurant);