import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        Main: MainTabNavigator
    })
);
