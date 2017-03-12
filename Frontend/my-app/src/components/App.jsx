import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from './Navigation';
import Header from './Header';

const App = (props) => {
    return (
      <div>
        <Header/>
        <Helmet
          title="This is me!"
          link={[
              { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
          />
          <Wrap>
              {props.children}
          </Wrap>

      </div>
    );
}

const Wrap = styled.div`
    max-width 900px;
    padding: 0 3%;
`;

export default App;
