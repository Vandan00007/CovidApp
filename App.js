import React from 'react';

import Home from './src/components/Chat'
import Home from './src/components/Home'

import {
  Router,
  Scene,
} from  'react-native-router-flux';
import {
  Platform
} from 'react-native';

class App extends React.Component{
  render() {
    return(<Router>
      <Scene key ='root' style = {{paddingTop: Platform.OS=='ios'?64:54}}>
      <Scene key='home' Component ='Home' title='Home'></Scene>
      <Scene key='home' Component ='Chat' title='Chat'></Scene>
      </Scene>
    </Router>
    );
  }
}
export default App; 