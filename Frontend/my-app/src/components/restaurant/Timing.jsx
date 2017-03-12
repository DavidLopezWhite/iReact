import React, {Component} from 'react';
import styled from 'styled-components';

const Time = styled.button`
  display: inline-block;
`;

const TimeList = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 180px;
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
            return (<Time className={this.props.timings[key] ? 'active' : 'disabled'}>{key}</Time>)
          })
        }
      </TimeList>
    )
  }
}