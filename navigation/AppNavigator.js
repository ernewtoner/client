import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Auth: AuthStack,
            Main: MainTabNavigator
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);
