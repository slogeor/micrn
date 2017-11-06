/**
 * 角标组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './style';

function Badge(props) {
  // 转成字符串
  const text = `${props.text}`;

  if (text.length === 0) {
    return props.children;
  }

  // 计算字符串的宽度
  const textWidth = props.characterWidth * (text.length + 1);

  return (
    <View style={[styles.container, props.style]}>
      { props.children }
      <View
        style={[
          styles.textWrap,
          {
            width: textWidth,
            borderRadius: props.characterWidth,
            height: props.characterWidth * 2,
          },
          props.textWrapStyle,
        ]}
      >
        <Text style={[styles.text, props.textStyle]}>{text}</Text>
      </View>
    </View>
  );
}

Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 文本容器样式
  textWrapStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 单个字符宽度
  characterWidth: PropTypes.number,
  // 角标文本内容
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Badge.defaultProps = {
  style: null,
  children: null,
  textWrapStyle: null,
  textStyle: null,
  characterWidth: 7,
  text: '',
};

export default Badge;
