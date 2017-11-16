import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { NOOP } from '../constant';
import styles from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    // 获取 input 引用
    this.getInputRef = this.getInputRef.bind(this);
  }

  // 获取 input 的引用
  getInputRef(el) {
    this.props.getInput(el);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          {...this.props}
          placeholderTextColor={this.props.placeholderColor}
          style={[styles.flexWarp, styles.input, this.props.inputStyle]}
          ref={this.getInputRef}
        />
      </View>
    );
  }
}

Input.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 获取 TextInput 元素
  getInput: PropTypes.func,
  // 文本距离左边的间距
  paddingLeft: PropTypes.number,
  // placeholder color
  placeholderColor: PropTypes.string,
};

Input.defaultProps = {
  style: null,
  inputStyle: null,
  getInput: NOOP,
  paddingLeft: 10,
  placeholderColor: '#999',
};

export default Input;
