import React, { Component } from "react"
import { Text, View } from "react-native"
import { All, NavBar, Btn } from "UIModule"
import styles from "./style"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <All>
        <NavBar
          title="按钮组件"
          titleStyle={{width: 200}}
          leftBtn="左边按钮"
          leftBtnStyle={{color: '#FF5200'}}
        />
        <View style={styles.container}>
          <View style={styles.view}>
            <Btn />
          </View>
          <View style={styles.view}>
            <Btn disabled style={{ backgroundColor: 'rgba(255, 82, 0, 0.6)' }} >
              <Text>禁用</Text>
            </Btn>
          </View>
          <View style={styles.view}>
            <Btn
              style={{ backgroundColor: '#FFF', borderWidth: 1, borderColor: '#333' }}
              btnStyle={{ color: '#666' }}
            >
              <Text>自定义</Text>
            </Btn>
          </View>

        </View>


      </All>
    )
  }
}
