import React, { Component } from "react"
import { Text, View, TouchableWithoutFeedback} from "react-native"
import {
  All,
  NavBar,
  Btn,
  Mask,
  Loading,
  TabItem,
  Tab,
  Popover,
  ActionSheet,
  Badge,
  ToolTip,
  Dialog,
  Alert,
} from "UIModule"
import styles from "./style"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({
      visible: true,
    })
  }

  hide() {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <All>
        <NavBar
          title="Alert"
          titleStyle={{width: 200}}
          leftBtnStyle={{color: '#FF5200'}}
        />
        <View style={styles.container}>
          <View>
            <Btn onPress={this.show} />
          </View>
          <Alert
            visible={this.state.visible}
            onPress={this.hide}
            titleStyle={styles.text}
          />
        </View>
      </All>
    )
  }
}
