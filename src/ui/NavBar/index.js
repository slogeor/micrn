import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { STATUS_BAR_HEIGHT, HEADER_HEIGHT, NOOP } from '../constant';
import styles from './style.js';

/**
 * NavBar 的高度由 statusBarHeight 和 headerHeight 两部分组成
 * statusBarHeight 默认 iOS 为 20, Android 为 0
 * headerHeight 默认 iOS 为 44, Android 为 56
 */
function NavBar(props) {
  return (
    <View
      style={[styles.navBar, {
        paddingTop: props.statusBarHeight,
      },
      props.style]}
    >
      <View style={[styles.header, { height: props.headerHeight }]}>
        <TouchableOpacity
          activeOpacity={props.disableLeftBtn ? 1 : props.activeOpacity}
          onPress={props.disableLeftBtn ? NOOP : props.handelLeftBtn}
        >
          <View style={[styles.btnWrap, props.leftBtnWrapStyle]}>{getNavBarLfetBtn(props)}</View>
        </TouchableOpacity>
        <View style={[styles.titleWrap, props.titleWrapStyle]}>{getNavBarTitle(props)}</View>
        <TouchableOpacity
          activeOpacity={props.disableRightBtn ? 1 : props.activeOpacity}
          onPress={props.disableRightBtn ? NOOP : props.handelRightBtn}
        >
          <View style={[styles.btnWrap, props.rightBtnWrapStyle]}>{getNavBarRightBtn(props)}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function _isString(str) {
  return typeof str === 'string';
}

// NavBar 的标题
function getNavBarTitle(propsObj) {
  const title = propsObj.title;
  if (_isString(title)) {
    return (
      <Text style={[styles.title, propsObj.titleStyle]} numberOfLines={1}>{title}</Text>
    );
  }
  return title;
}

// 左侧按钮
function getNavBarLfetBtn(propsObj) {
  const leftBtn = propsObj.leftBtn;
  if (_isString(leftBtn)) {
    return (
      <Text style={[styles.btnText, propsObj.leftBtnStyle]}>{leftBtn}</Text>
    );
  }
  return leftBtn;
}

// 右侧按钮
function getNavBarRightBtn(propsObj) {
  const rightBtn = propsObj.rightBtn;
  if (_isString(rightBtn)) {
    return (
      <Text style={[styles.btnText, propsObj.rightBtnStyle]}>{rightBtn}</Text>
    );
  }
  return rightBtn;
}

NavBar.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 标题: 可以是文本，也可以是组件
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题样式: 当标题是文本时才生效
  titleStyle: Text.propTypes.style,
  // 左侧按钮: 可以是文本，也可以是组件
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 左侧按钮样式: 当 leftBtn 为文本时才生效
  leftBtnStyle: Text.propTypes.style,
  // 右侧按钮: 可以是文本，也可以是组件
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 右侧按钮样式: 当 leftBtn 为文本时才生效
  rightBtnStyle: Text.propTypes.style,
  // statusBar 高度
  statusBarHeight: PropTypes.number,
  // header 高度
  headerHeight: PropTypes.number,
  // 标题容器的样式
  titleWrapStyle: View.propTypes.style,
  // 左侧按钮点击事件
  handelLeftBtn: PropTypes.func,
  // 是否禁用左侧按钮
  disableLeftBtn: PropTypes.bool,
  // 左侧按钮容器的样式
  leftBtnWrapStyle: View.propTypes.style,
  // 左侧按钮点击事件
  handelRightBtn: PropTypes.func,
  // 是否禁用左侧按钮
  disableRightBtn: PropTypes.bool,
  // 左侧按钮容器的样式
  rightBtnWrapStyle: View.propTypes.style,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
};

NavBar.defaultProps = {
  style: null,
  title: '',
  titleStyle: null,
  leftBtn: '',
  leftBtnStyle: null,
  rightBtn: '',
  rightBtnStyle: null,
  statusBarHeight: STATUS_BAR_HEIGHT,
  headerHeight: HEADER_HEIGHT,
  titleWrapStyle: null,
  handelLeftBtn: NOOP,
  disableLeftBtn: false,
  leftBtnWrapStyle: null,
  handelRightBtn: NOOP,
  disableRightBtn: false,
  rightBtnWrapStyle: null,
  activeOpacity: 0.8,
};

export default NavBar;
