import React from "react";
import { Image } from "react-native";
import { Button, Text, Footer, FooterTab } from "native-base";
import styles from "./styles";
import Images from "../../themes/Images";
import { Metrics } from "../../themes/";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
        
class Footer extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      selectedTab: "Discovery"
    }
  };


            render() {
                return (
        <Footer>
          <FooterTab style={styles.footerTabBg}>
           
            
            <Button
              vertical
              onPress={() => 
                {
                    this.props.navigation.openDrawer()
                }
                
              }
            >
              {this.state.selectedTab == "Discovery" ? (
                <Ionicons
                  name="ios-menu"
                  size={30}
                  color="#00bff3"
                  style={{ justifyContent: "center" }}
                />
              ) : (
                <Ionicons name="ios-menu" size={30} color="#929292" />
              )}
              <Text
                style={
                  this.state.selectedTab == "Discovery"
                    ? styles.activeTabText
                    : styles.normalTabText
                }
              >
                Menu
              </Text>
            </Button>
            <Button
              vertical
              onPress={() =>{this.props.navigation.navigate("ListScreen");
               this.setState({ selectedTab: "Category" })}}
            >
              {this.state.selectedTab == "Category" ? (
                <Image source={Images.activeCategory} style={styles.tabIcon} />
              ) : (
                <Image source={Images.normalCategory} style={styles.tabIcon} />
              )}
              <Text
                style={
                  this.state.selectedTab == "Category"
                    ? [
                        styles.activeTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                    : [
                        styles.normalTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                }
              >
                Lista
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => {this.props.navigation.navigate("Profile");
              this.setState({ selectedTab: "Profile" })}}
            >
              {this.state.selectedTab == "Profile" ? (
                <EvilIcons name="user" size={30} color="#00bff3" />
              ) : (
                <EvilIcons name="user" size={30} color="#929292" />
              )}
              <Text
                style={
                  this.state.selectedTab == "Profile"
                    ? styles.activeTabText
                    : styles.normalTabText
                }
              >
                Perfil
              </Text>
            </Button>
          </FooterTab>
        </Footer>
                );
            }
          }

export default withNavigation(FooterBar);