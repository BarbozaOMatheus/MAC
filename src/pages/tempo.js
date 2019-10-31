import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tempo extends Component {

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
          <View style={{height: '30%',}}>
            <Text>Início Automático</Text>
          </View>
          <View style={{height: '70%',}}>
            <Text >Tempo pressionando (segundos)</Text>
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
            onPress={() => this.props.navigation.navigate('Tempo')}
            >
              <Text>EDITAR</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Text>GRAVAR</Text>
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
    height: '43%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 5,
  },
  menu: {
    height: '29%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
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