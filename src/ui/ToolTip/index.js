/**
 * 提示框组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Mask from '../Mask';
import styles from './style';

function ToolTip(props) {
  const { visible, maskStyle, textStyle, text, textWrapperStyle, pointerEvents } = props;
  if (!text) return null;
  return (
    <Mask
      visible={visible}
      style={[styles.mask, maskStyle]}
      pointerEvents={pointerEvents}
    >
      <View style={[styles.textWrapper, textWrapperStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </Mask>
  );
}

ToolTip.propTypes = {
  // 控制开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  maskStyle: View.propTypes.style,
  // 控制 Mask 是否可以作为触控事件的目标
  pointerEvents: Mask.propTypes.pointerEvents,
  // 文本容器样式
  textWrapperStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 文本
  text: PropTypes.string.isRequired,
};

ToolTip.defaultProps = {
  visible: false,
  maskStyle: null,
  pointerEvents: 'auto',
  textWrapperStyle: null,
  textStyle: null,
  text: '',
};

export default ToolTip;
