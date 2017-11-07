import React from 'react';
import PropTypes from 'prop-types';
import {  View, TouchableOpacity, Text } from 'react-native';
import { ACTIVE_OPACITY, NOOP } from '../constant';
import Mask from '../Mask';
import styles from './style.js';

// 按钮
function createBtn(propsObj) {
    return propsObj.btnOpts.map((item, index) => {
    const btnStyle = [styles.btn, propsObj.btnStyle];
    // 第一个按钮
    if (index === 0) {
      btnStyle.push(styles.firstBtn);
    }
    return (
      <View style={[btnStyle]} key={item.key || index}>
        <TouchableOpacity onPress={item.onPress} activeOpacity={ACTIVE_OPACITY}>
          <Text
            style={[
              styles.btnText,
              propsObj.btnTextStyle,
              item.style,
            ]}
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });
  return
}

// 标题
function createTitle(propsObj) {
  const title = propsObj.title;
  if (!title) return null;
  if (typeof title === 'string') {
    return (
      <View style={[styles.titleContainer, propsObj.titleWrapStyle]}>
        <Text style={[styles.title, propsObj.titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }
  return title;
}

// 按钮
function createContent(propsObj) {
  const content = propsObj.content;
  if (!content) return null;

  if (typeof content === 'string') {
    return (
      <View style={propsObj.contentWarpStyle}>
        <Text style={[styles.content, propsObj.contentStyle]}>
          {content}
        </Text>
      </View>
    );
  }
  return content;
}

function Dialog(props) {
  return (
    <Mask
      visible={props.visible}
      style={[styles.mask, props.maskStyle]}
    >
      <View style={[styles.dialog, props.style]}>
        <View style={styles.container}>
          { createTitle(props) }
          { createContent(props) }
        </View>
        <View style={[styles.btnWrap, props.btnWrapStyle]}>
          { createBtn(props) }
        </View>
      </View>
    </Mask>
  );
}

Dialog.propTypes = {
  // 控制开关
  visible: PropTypes.bool,
  // 遮罩层样式
  maskStyle: View.propTypes.style,
// 弹框样式
  style: View.propTypes.style,
  // 按钮样式
  btnStyle: View.propTypes.style,
  // 按钮文本样式
  btnTextStyle: Text.propTypes.style,
  // 按钮
  btnOpts: PropTypes.arrayOf(PropTypes.shape({
    // 唯一标识
    key: PropTypes.string,
    // 文本
    title: PropTypes.string,
    // 样式
    style: Text.propTypes.style,
    // 点击回调
    onPress: PropTypes.func,
  })),
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题容器样式, title 为字符串才有效
  titleWrapStyle: View.propTypes.style,
  // 标题文本样式 title 为字符串才有效
  titleStyle: Text.propTypes.style,
  // 内容
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 容器样式, 字符串才生效
  contentWarpStyle: Text.propTypes.style,
  // 文本样式, 字符串才生效
  contentStyle: Text.propTypes.style,
  // 按钮容器样式
  btnWrapStyle: View.propTypes.style,
};

Dialog.defaultProps = {
  visible: false,
  maskStyle: null,
  style: null,
  btnStyle: null,
  btnTextStyle: null,
  btnOpts: [],
  title: '',
  titleWrapStyle: null,
  titleStyle: null,
  content: '',
  contentWarpStyle: null,
  contentStyle: null,
  btnWrapStyle: null,
};

export default Dialog;
