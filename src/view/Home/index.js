import React, { Component } from "react"
import { Text, View } from "react-native"
import { All, NavBar} from '../../ui';
import styles from './style';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <All>
        <NavBar title="demo" />
        <View style={styles.container}>
          <Text>111</Text>
        </View>
      </All>
    )
  }
}
