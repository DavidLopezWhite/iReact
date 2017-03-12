import React from 'react';
import Navigation from './Navigation';
import Helmet from 'react-helmet';



const App = (props) => {
    return (
      <div>
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
