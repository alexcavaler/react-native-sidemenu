import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator,createSwitchNavigator,createAppContainer } from "react-navigation";
import SideBar from "../components/sidebar/SideBar";
import Home from './Home';
import Profile from "../Profile/Profile";
import MyInformation from '../MyInformation/MyInformation';
import ListScreen from "../List/List";
import LocationScreen from "../Location/Location";
import Notification from '../Notification/index.js'

const StackNavigation = createStackNavigator( {
  Home: { screen: Home },
  Profile: { screen: Profile },
  MyInformation: { screen: MyInformation },
  ListScreen: { screen: ListScreen },
  LocationScreen: { screen: LocationScreen },
  Notification: { screen: Notification },
}, {
  initialRouteName: 'Home',
})

const DrawerNav = createDrawerNavigator(
  {
    SideBar: { screen: SideBar },
  })

const MainNavigation = createSwitchNavigator({
  Stack: StackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  Drawer: DrawerNav,
})

const AppContainer = createAppContainer(MainNavigation);

export default AppContainer;