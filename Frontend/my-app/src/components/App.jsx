import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import Header from './Header';

const App = (props) => {
    return (
      <div>
        <Header/>
        <Helmet
          title="This is me!"
          link={[
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]}
          />
        <Navigation/>
        {props.children}
      </div>
    );
}
export default App;
