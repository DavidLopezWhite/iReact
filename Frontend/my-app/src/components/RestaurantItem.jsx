import React, {Component} from 'react';
import Timing from './restaurant/Timing'
import RatingBar from './RatingBar'
import styled from 'styled-components';

const RestItem = styled.div`
  display: inline-block;
  margin: 1rem;
`;

const SmallText = styled.small`
  font-size: small;
`;

export default class RestaurantItem extends Component {
  render() {
    return (
      <RestItem>
        <p>{this.props.name}</p>
        <SmallText>{this.props.address}</SmallText>
        <div>
          <img src={this.props.photo_url} width="200" height="150"/>
          <Timing timings={this.props.timings}/>
        </div>
        <RatingBar stars={this.props.rating}/>
      </RestItem>
    )
  }
}