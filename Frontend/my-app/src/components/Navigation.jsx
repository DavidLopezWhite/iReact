import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Navigation extends Component {

  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="is-active">splitbill</IndexLink>
        <Link to="/signin" activeClassName="is-active">Sign In</Link>
      </nav>
    )
  }
}
