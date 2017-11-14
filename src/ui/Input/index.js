import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { NOOP } from '../constant';
import styles from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.value = null;
    // 获取 input 引用
    this.getInputRef = this.getInputRef.bind(this);

    this.onChangeText = this.onChangeText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.defaultValue !== this.props.defaultValue) {
    //   this.setState({
    //     value: nextProps.defaultValue,
    //   });
    //   this.value = nextProps.defaultValue;
    //   // 触发更新
    //   this.forceUpdate();
    // }
  }

  onChangeText(value) {
    if (this.value !== !!value) {
      // 由有到无由无到有
      // 触发下 render，使 placeholder 消失或出现
      this.forceUpdate();
    }
    this.value = value;
    this.props.onChangeText(value, this.props.name);
  }

  // 获取 input 的引用
  getInputRef(el) {
    this.props.getInput(el);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholderTextColor="#999"
          {...this.props}
          style={[styles.flexWarp, styles.input, this.props.inputStyle]}
          ref={this.getInput}
          onChangeText={this.onChangeText}
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
  // 输入回调
  onChangeText: PropTypes.func,
  // 获取 TextInput 元素
  getInput: PropTypes.func,
  // 文本距离左边的间距
  paddingLeft: PropTypes.number,
};


Input.defaultProps = {
  style: null,
  inputStyle: null,
  onChangeText: NOOP,
  getInput: NOOP,
  paddingLeft: 10,
};

export default Input;
