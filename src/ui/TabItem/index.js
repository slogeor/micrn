/**
 * TabItem 组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { NOOP } from '../constant';
import styles from './style';

function TabItem(props) {
  let title = props.title;
  if (typeof title === 'string') {
    title =  (
      <Text style={[
        styles.tabTitle,
        props.titleStyle,
        props.active && styles.activeTabTitle,
        props.active && props.activeTitleStyle,
      ]}>{title}</Text>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={[
          styles.border,
          props.borderStyle,
          props.active && styles.activeBorder,
          props.active && props.activeBorderStyle,
        ]}>{title}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

TabItem.propTypes = {
  // 自定义容器样式
  style: View.propTypes.style,
  // title
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // 默认底部 border 的样式
  borderStyle: View.propTypes.style,
  // 选中 tab 底部 border 的样式
  activeBorderStyle: View.propTypes.style,
  // title 的样式 当 title 为字符串才生效
  titleStyle: Text.propTypes.style,
  // 选中的 title 样式
  activeTitleStyle: Text.propTypes.style,
  // 选中的状态
  active: PropTypes.bool,
  // onPress
  onPress: PropTypes.func,
};

TabItem.defaultProps = {
  style: null,
  title: '',
  borderStyle: null,
  activeBorderStyle: null,
  titleStyle: null,
  activeTitleStyle: null,
  active: false,
  onPress: NOOP,
};

export default TabItem;
