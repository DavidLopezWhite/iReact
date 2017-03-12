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

const Confirmation = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 200px;
`;

const FunctionBox = styled.div`
  display:inline-block;
  vertical-align: top;
`;

export default class RestaurantItem extends Component {

  constructor(props) {
    super(props);
    this.state = {approved: undefined};
  }

  onTimeClick(key) {
    this.props.onTimeClick(this.props.id, key);    
  };

  render() {
    return (
      <RestItem>
        <p>{this.props.name}</p>
        <SmallText>{this.props.address}</SmallText>
        <div>
          <img src={this.props.photo_url} width="200" height="150"/>
          <FunctionBox>
            <Timing id={this.props.id} timings={this.props.timings} selected={this.props.selected} onTimeClick={this.onTimeClick.bind(this)}/>
            
            {(function(id, selected, curr) {
              if (curr.props.approved && selected && selected.indexOf(id) != -1) {
                return (<Confirmation>
                  Thank you!<br/><br/>
                  An email confirmation is on its way!
                </Confirmation>);
              } else if (selected && selected.indexOf(id) != -1) {
                return (<button onClick={() => curr.props.onReserve()}>Confirm Reservation</button>);
              }
            })(this.props.id, this.props.selected, this)}
          </FunctionBox>
        </div>
        <RatingBar stars={this.props.rating}/>
      </RestItem>
    )
  }
}