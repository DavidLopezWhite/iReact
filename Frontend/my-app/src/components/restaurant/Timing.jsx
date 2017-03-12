import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';

export class Timing extends Component {
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {
          this.props.timings.map((timing) => {
            return (<div>{timing}</div>);
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Timing);