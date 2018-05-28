import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";

import SignIn from "./components/SignIn";
import UserPage from "./components/UserPage"

import {createStackNavigator} from "react-navigation";
import * as firebase from 'firebase';



 const Navigation= createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    UserPage: {
      screen: UserPage
    }
  },
    {
    index: 0,
    initialRouteName: 'SignIn',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
 );

export default Navigation;



