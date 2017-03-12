import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

export class SearchBar extends Component {

  handleSubmit(e) {
    e.preventDefault();

    let { dispatch } = this.props;
    dispatch(actions.onStartSearch(this.searchTerm.value));
  }

  handleClick() {
    document.getElementById('loading').style.cssText = "display: block";
    setTimeout(() => location = "/#/list", 1000);
  }

  render() {
    return (
      <Div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <h1>START YOUR RESERVATION</h1>
          <field>
            <input type="text" name="city" required="required" placeholder="enter city or address" ref={input => this.searchTerm = input}/>
          </field>

          <field>
            <input type="text" name="number" required="required" placeholder="number in party" ref={input => this.number = input}/>
          </field>

          <br/>

          <Button type="submit" onClick={this.handleClick.bind(this)}>Find a Table</Button>

          <div><Dots id="loading" src={require('../../public/dots.gif')}/></div>
        </Form>
      </Div>
    )
  }
}

const Dots = styled.img`
  display: none;
  margin: 0 auto;
  margin-top: -50px;
`;

const Div = styled.div`
  text-align: center;
`;

const Form = styled.form`
  h1 {
    text-align: center;
    font-size: 2em;
    padding: 2em;
    font-weight: bold;
  }
  input {
    font-size: 1.25em;
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    border: 1px solid #D3D3D3;
    border-radius: 3px;

    &:focus {
      border: none;
      outline: none;
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
  }
`;

const Button = styled.button`
  color: #808080;
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  background-color: #D3D3D3;
  border: 2px solid white;
  cursor: pointer;
  outline: none;

  &:hover {
    color: white;
    background-color: #696969;
  }
`;

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(SearchBar);
