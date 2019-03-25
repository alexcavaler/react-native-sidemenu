import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator,createSwitchNavigator,createAppContainer } from "react-navigation";
import SideBar from "../components/sidebar/SideBar";
import Home from './Home';
import Profile from "../Profile/Profile";
import MyInformation from '../MyInformation/MyInformation';
import ListScreen from "../List/List";
import LocationScreen from "../Location/Location";
/*
import MapScreen from "./MapScreen";


import ListScreen from "../ListScreen/index.js";
import HelpScreen from "../HelpScreen/index.js";
import MapList from "../Map/index.js";
import SignInScreen from '../Signin/index.js'
import Notification from '../Notification/index.js'
import WishList from '../WishList/index.js'
import FAQ from '../FAQ/index.js'
import FAQGeneralEnquiries from '../FAQGeneralEnquiries/index.js'
import AboutUs from "../AboutUs/index";
import PrivacyPolicy from "../PrivacyPolicy/index";
*/

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    MyInformation: { screen: MyInformation },
    ListScreen: { screen: ListScreen },
    LocationScreen: { screen: LocationScreen }
  },{
    initialRouteName: 'Home',
  }
);
const SideBarScreenRouter = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    MyInformation: { screen: MyInformation },
    ListScreen: { screen: ListScreen },
    LocationScreen: { screen: LocationScreen }
  },{
    initialRouteName: 'Home',
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const  Main = createSwitchNavigator({
  HomeScreenRouter: RootStack,
  SideBarScreenRouter: SideBarScreenRouter, 
},{
  initialRouteName: 'HomeScreenRouter',
})

const AppContainer = createAppContainer(Main);

export default AppContainer;