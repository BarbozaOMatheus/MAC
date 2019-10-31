import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Config extends Component {

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
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
            onPress={() => this.props.navigation.navigate('Sobre')}
            >
              <Text>SOBRE</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Text >EMERGÊNCIA</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
            onPress={() => this.props.navigation.navigate('Tempo')}
            >
              <Text>TEMPO</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Text>DICAS</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 4,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#e8dcdc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 10,
  }
});