import React, {Component} from 'react';
import RestaurantItem from './RestaurantItem';
import SearchResultText from './SearchResultText';
import LocationPin from './LocationPin';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const List = styled.div`
  display: table;
  margin: 0 auto;
  width: 900px;
`

export class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.listRestaurants = [
    {
      id: 'rest1',
      name: 'Restaurant 1',
      address: 'Address of Restaurant 1',
      photo_url: 'http://jbssa.com/images/our-business/beef/cutout-beef.jpg',
      rating: 4.5,
      timings: {
        '5.00pm': true,
        '5.30pm': false,
        '6.00pm': true,
        '6.30pm': false,
        '7.00pm': true,
        '7.30pm': false,
      }

    },
    {
      id: 'rest2',
      name: 'Restaurant 2',
      address: 'Address of Restaurant 2',
      photo_url: 'http://jbssa.com/images/our-business/beef/cutout-beef.jpg',
      rating: 4,
      timings: {
        '5.00pm': true,
        '5.30pm': true,
        '6.00pm': true,
        '6.30pm': false,
        '7.00pm': false,
        '7.30pm': false,
      }
    },
    {
      id: 'rest3',
      name: 'Restaurant 3',
      address: 'Address of Restaurant 3',
      photo_url: 'http://jbssa.com/images/our-business/beef/cutout-beef.jpg',
      rating: 2.5,
      timings: {
        '5.00pm': true,
        '5.30pm': true,
        '6.00pm': true,
        '6.30pm': false,
        '7.00pm': false,
        '7.30pm': false,
      }
    }
  ];
  }

  render() {
    const renderRestaurants = () => {
      return this.listRestaurants.map((restaurant) => {
        // console.log(restaurant);
        // return (<div>{restaurant.id}</div>)
        return (<RestaurantItem key={restaurant.id} {...restaurant}/>);
      })
    };

    return (
        <Wrapper>
            <Header>
                <SearchResultText amount='7' address="San Francisco, CA 94105"/>
                <LocationPin address="San Francisco, CA 94105"/>
            </Header>
            <List>{renderRestaurants()}</List>
        </Wrapper>
    )
  }

}


const Header = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export default connect(
    (state) => {
        return {
            listRestaurants: state.listRestaurants
        }
    }
)(RestaurantList);
