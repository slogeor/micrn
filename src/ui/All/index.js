/**
 * 页面容器组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import styles from './style';

function All(props) {
  return (
    <View style={[styles.container, props.style]}>
      <StatusBar
        backgroundColor={props.statusBarBgColor}
        barStyle={props.statusBarStyle}
        hidden={props.hidden}
      />
      {props.children}
    </View>
  );
}

All.propTypes = {
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // 是否隐藏状态栏
  hidden: PropTypes.bool,
  // StatusBar 背景色，仅对 Android 生效
  statusBarBgColor: PropTypes.string,
  /**
   * StatusBar 样式类型
   * default: 默认的样式（IOS为白底黑字、Android为黑底白字）
   * light-content: 黑底白字
   * dark-content: 白底黑字
   */
  statusBarStyle: PropTypes.string,
};

All.defaultProps = {
  style: null,
  hidden: false,
  children: null,
  statusBarBgColor: 'transparent',
  statusBarStyle: 'light-content',
};

export default All;
