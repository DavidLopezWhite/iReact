import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';

export class RatingBar extends Component {
  constructor(props) {
    super(props);
    let buff = this.state.stars;
    this.state = {stars: []};
    while (buff-- >= 1 && this.state.stars);
    if (buff == 0.5 && this.state.stars);
    for (var i = 0; i < 5 - this.state.stars.length; i++) this.state.stars.push('star-outline');
  }
  render() {
    // star, star-half, star-outline
    return (
        <ul>
        {
          // this.state.stars.map((star) => {
          //   return (<i className="material-icons">{star}</i>);
          // }) }
        }
        </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(RatingBar);