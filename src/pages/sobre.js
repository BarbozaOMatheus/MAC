import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Sobre extends Component {

  render() {
    return(
      <View style={styles.conainer}>
        <View style={styles.top}>
        
            <TouchableOpacity style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-left" size={40} color="#fabb00" />
            </TouchableOpacity>
            
        </View>  
        
        <View style={styles.center}></View>
        
        <View style={styles.bottom}>
          <View style={{height: '20%',}}>
            <Text>IF</Text>
          </View>
          <View style={{height: '60%',}}>
            <Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </View>
          <View style={{height: '20%',}}>
            <Text >Colaboradores: Matheus Barboza, Jerry Santos, Felipe Paiva,
            Iago Barbosa
            </Text>
          </View>
        </View>
        
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#43e02f',
    padding: 10
  },
  profileImage: {
    width: 123,
    height: 123,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#787878',
    backgroundColor: '#eee',
    elevation: 24,
  },
  center: {
    height: '3%',
    backgroundColor: '#1ec20a'
  },
  bottom: {
    height: '72%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 5,
  },
});