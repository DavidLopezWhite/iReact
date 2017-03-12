import React, {Component} from 'react';
import styled from 'styled-components';

const Time = styled.a`
  display: inline-block;
  border: 1px black solid;
  border-radius: 5px;
  
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const TimeList = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 200px;
`;
export default class Timing extends Component {
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    var keys = [];
    for(var k in this.props.timings) keys.push(k);

    return (
      <TimeList>
        {
          keys.map((key) => {
            return (<Time key={key} className={this.props.timings[key] ? 'active' : 'disabled'}>{key}</Time>)
          })
        }
      </TimeList>
    )
  }
}