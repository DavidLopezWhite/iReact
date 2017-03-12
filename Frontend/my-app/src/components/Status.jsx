import React, {Component} from 'react';
import styled from 'styled-components';

const Header = styled.div`
  border-radius: 5px;
  background-color: gray;
  width: 600px;
`;

export default class Status extends Component {

  constructor(props) {
    super(props);
    this.reservation = {
      date: 'Thursday Mar 22, 2017',
      time: '7.30pm',
      guests: [
        {name: 'abc' , email: 'abc@abc.com', attending: false},
        {name: 'bcd' , email: 'bcd@bcd.com', attending: false},
        {name: 'cde' , email: 'cde@cde.com', attending: false}
      ],
      address: 'Lettuce, 2484 Marina, CA 94122',
      attending: false,
    }
  }

  render() {
    return (
      <Header>
          <b>YOUR RESERVATION:</b>
          <div>
            <div>
              {this.reservation.date}<br/>
              {this.reservation.guests.length} guests at {this.reservation.time};
            </div>
            <div>{this.reservation.address}</div>
          </div>
      </Header>


    )
  }
}
