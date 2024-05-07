import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Store from './component/store/store.js';
import Home from './component/Home.js';
import Login from './component/Login.js';
import Words from './component/Words.js';
import Test from './component/Test.js';
import Welcome from './component/Welcome.js';
import User from './component/User.js';
import Option from './component/Option.js';
import Register from './component/Register.js'
import About from'./component/About.js';
import Topic from './component/Topic.js';
import TopicMenu from './component/TopicMenu.js'
import GrammarContent from './component/GrammarContent.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store = {Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Topic" component={Topic}/>
        <Stack.Screen name="Words" component={Words} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="TopicMenu" component={TopicMenu}/>
        <Stack.Screen name="GrammarContent" component={GrammarContent}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
  );
}

export default App;
