import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { NOOP } from '../constant';
import styles from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.value = props.defaultValue;
    this.getInput = this.getInput.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.value = nextProps.defaultValue;
      // 触发下 render，使 placeholder 消失或出现
      this.forceUpdate();
    }
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

  getInput(el) {
    this.input = el;
    this.props.getInput(el);
  }

  makePlaceholder() {
    let placeholder = this.props.placeholder;
    if (typeof placeholder === 'string') {
      placeholder = (
        <Text
          style={[styles.placeholder, this.props.placeholderStyle]}
          numberOfLines={1}
        >
          {this.props.placeholder}
        </Text>
      );
    }
    return placeholder;
  }

  render() {
    const placeholder = this.makePlaceholder();
    const placeholderContainerStyle = [styles.fill];

    if (this.value) {
      placeholderContainerStyle.push(styles.fillHide);
    }

    return (
      <View style={[styles.all, this.props.style]}>
        <View style={placeholderContainerStyle}>
          {placeholder}
        </View>
        <TextInput
          {...this.props.textInputProps}
          defaultValue={this.props.defaultValue}
          style={[styles.fill, styles.input, this.props.inputStyle]}
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
  // 初始值
  defaultValue: PropTypes.string,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 占位元素
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 占位元素样式（placeholder 为字符串时才生效）
  placeholderStyle: Text.propTypes.style,
  // onChangeText 的第二个参数，同时在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 是否必要
  required: PropTypes.bool,
  // 输入回调
  onChangeText: PropTypes.func,
  /* eslint-disable */
  // TextInput 属性
  textInputProps: PropTypes.object,
  /* eslint-enable */
  // 获取 TextInput 元素
  getInput: PropTypes.func,
};
Input.defaultProps = {
  style: null,
  defaultValue: '',
  inputStyle: null,
  placeholder: '',
  placeholderStyle: null,
  name: '',
  readableName: '',
  required: false,
  onChangeText: NOOP,
  textInputProps: {},
  getInput: NOOP,
};

export default Input;
