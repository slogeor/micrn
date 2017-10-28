/**
 * 按钮
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { ACTIVE_OPACITY, NOOP } from '../constant';
import styles from './style';

function Btn(props) {
  let content = props.children;
  if (typeof content === 'string') {
    content = (
      <Text style={[styles.text, props.btnStyle]}>{content}</Text>
    );
  }

  return (
    <View style={[styles.container, props.style]}>
    <TouchableOpacity
      activeOpacity={props.disabled ? 1 : props.activeOpacity}
      onPress={props.disabled ? props.onPress : NOOP}
      style={[styles.contentContainer, props.contentContainerStyle]}
      hitSlop={props.hitSlop}
    >
      {content}
    </TouchableOpacity>
  </View>
  )
}

Btn.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 按钮文本样式: 当 children 为字符串时才生效
  btnStyle: Text.propTypes.style,
  // 是否禁用: true 时，activeOpacity 为 1, onPress 为 NOOP
  disabled: PropTypes.bool,
  // 内部容器样式
  contentContainerStyle: View.propTypes.style,
  // 按钮热区
  hitSlop: TouchableOpacity.propTypes.hitSlop,
  // 点击回调
  onPress: PropTypes.func,
  // 点击时透明度反馈
  activeOpacity: PropTypes.number,
  // 按钮内容
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  // 按钮热区
  hitSlop: TouchableOpacity.propTypes.hitSlop,
};

Btn.defaultProps = {
  style: null,
  btnStyle: null,
  disabled: false,
  contentContainerStyle: null,
  hitSlop: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  onPress: null,
  activeOpacity: ACTIVE_OPACITY,
  children: '确定',
};

export default Btn;
