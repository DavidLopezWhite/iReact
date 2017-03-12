import React from 'react';
import Helmet from 'react-helmet';
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
        {props.children}
      </div>
    );
}
export default App;
