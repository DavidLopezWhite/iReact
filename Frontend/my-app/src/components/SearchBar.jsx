import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

export class SearchBar extends Component {

  handleSubmit(e) {
    e.preventDefault();

    let { dispatch } = this.props;
    dispatch(actions.onStartSearch(this.searchTerm.value));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <h1>START YOUR RESERVATION</h1>
        <field>
          <input type="text" name="city" placeholder="enter city or address" ref={input => this.searchTerm = input}/>
        </field>

        <field>
          <input type="text" name="number" placeholder="number in party" ref={input => this.number = input}/>
        </field>

        <button type="submit">Find a Table</button>

        <div>Loading...</div>
      </Form>
    )
  }
}

const Form = styled.form`
    input {
        font-size: 1.25em;
        padding: 0.5em;
        margin: 0.5em;
        color: palevioletred;
        border: 1px solid black;
        border-radius: 3px;

        &:focus {
          border: none;
          box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
        }
    }
`;

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(SearchBar);
