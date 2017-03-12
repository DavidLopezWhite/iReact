import React, {Component} from 'react';
import styled from 'styled-components';

const Time = styled.a`
  display: inline-block;
  border: 1px black solid;
  border-radius: 5px;
  
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px;

  &.active:hover {
    background-color: orange;
    cursor: pointer;
  }

  &.disabled {
    background-color: gray;
  }

  &.selected {
    background-color: red;
  }
`;

const TimeList = styled.div`
  width: 200px;
`;
export default class Timing extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    var keys = [];
    for(var k in this.props.timings) keys.push(k);

    return (
      <TimeList>
        {
          keys.map((key) => {
            return (<Time onClick={() => this.props.onTimeClick(key)} key={key} className={this.props.timings[key] ? (this.props.selected === this.props.id + key ? 'selected' : 'active') : 'disabled'}>{key}</Time>)
          })
        }
      </TimeList>
    )
  }
}