import React, {Component} from 'react';

import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const LocationPin = (props) => {
    const {address} = props;

    return(
      <Wrap>
          <Marker>
              <FontAwesome name='map-marker' size='3x' style={{ color: '#000000' }}/>
          </Marker>
          <Address>
            {address}
        </Address>
      </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;

const Marker = styled.div`
    margin-right: 20px;
`;

const Address = styled.div`
    max-width: 140px;
`;

export default LocationPin;
