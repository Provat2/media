import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './Facebook'
import InstagramScreen from './Instagram'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator  = createBottomTabNavigator(
  {
    Facebook: {screen: FacebookScreen},
    Transaction: {screen: InstagramScreen} 
  }
)

const AppContainer = createAppContainer(AppNavigator);