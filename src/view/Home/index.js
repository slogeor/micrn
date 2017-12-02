import React, { Component } from "react"
import { Text, View, TouchableWithoutFeedback, TextInput} from "react-native"
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
  Confirm,
  Switch,
  Radio,
  Checkbox,
  Input,
  AddAndSubtract,
} from "UIModule"
import styles from "./style"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      text: '',
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getInputRef = this.getInputRef.bind(this);
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

  onChange() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  getInputRef(el) {
    this.el = el;
  }

  render() {
    return (
      <All>
        <NavBar
          title="AddAndSubtract"
          titleStyle={{width: 200}}
          leftBtnStyle={{color: '#FF5200'}}
        />
        <View style={styles.container}>
          <AddAndSubtract />
        </View>
      </All>
    )
  }
}
