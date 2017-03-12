import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Navigation extends Component {

  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="is-active">Home</IndexLink>
        <Link to="/create" activeClassName="is-active">Create Reservation</Link>
      </nav>
    )
  }
}
