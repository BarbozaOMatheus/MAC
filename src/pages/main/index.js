import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>

          <TouchableOpacity style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileImageConfig}
            onLongPress={() => this.props.navigation.navigate('Config')}
          >
            <Icon name="cog" size={40} color="#0e6ee3" />
          </TouchableOpacity>
        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Icon name="phone" size={65} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Icon name="address-book" size={65} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Icon name="google" size={65} color="#0e6ee3" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Icon name="whatsapp" size={65} color="#34af23" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}