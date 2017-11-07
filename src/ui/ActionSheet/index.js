import React  from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { IS_IOS, NOOP } from 'constantModule';
import Popover from '../Popover';
import styles from './style';

function ActionSheet(props) {
  return (
    <Popover
      visible={props.visible}
      maskStyle={[styles.mask, props.maskStyle]}
      onPress={props.onClose}
      onOpen={props.onOpen}
      onClose={props.onClose}
      duration={props.duration}
      pointerEvents={props.pointerEvents}
      style={[styles.container, props.style]}
    >
      <View style={styles.btnList}>
        {getBtnList(props)}
      </View>
      {getCancelBtn(props)}
    </Popover>
  );
}

// 按钮列表
function getBtnList(propsObj) {
  return (
    propsObj.btnOpts.map((item, index) => {
      const btnStyle = [styles.btn];
      // fix android
      if (!IS_IOS) {
        if (index === 0) {
          btnStyle.push(styles.btnFirst);
        } else if (index === propsObj.btnList.length - 1) {
          btnStyle.push(styles.btnLast);
        }
      }
      btnStyle.push([propsObj.btnStyle, item.style]);

      return (
        <TouchableOpacity
          activeOpacity={0.8}
          key={propsObj.key || index}
          style={btnStyle}
          onPress={item.onPress}
        >
          <Text style={[styles.btnText, propsObj.btnTextStyle, item.style]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      );
    })
  );
}

// 取消按钮
function getCancelBtn(propsObj) {
  const { cancelBtn = {}} = propsObj;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.btn,
        styles.cancelBtn,
        propsObj.btnStyle,
        cancelBtn.style
      ]}
      onPress={cancelBtn.onClose}
    >
      <Text
        style={[
          styles.btnText,
          styles.text,
          propsObj.btnTextStyle,
          cancelBtn.textStyle,
        ]}
      >
        {cancelBtn.text}
      </Text>
    </TouchableOpacity>
  );
}

ActionSheet.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // Popover 的 props
  // 控制开关
  visible: Popover.propTypes.visible,
  // 遮罩层样式
  maskStyle: Popover.propTypes.maskStyle,
  // 打开遮罩层回调
  onOpen: Popover.propTypes.onOpen,
  // 关闭遮罩层回调
  onClose: Popover.propTypes.onClose,
  // 动画时长
  duration: Popover.propTypes.duration,
  // 事情是否穿透
  pointerEvents: Popover.propTypes.pointerEvents,
  // 按钮配置项
  btnOpts: PropTypes.arrayOf(PropTypes.shape({
    // key
    key: PropTypes.string,
    // 样式
    style: View.propTypes.style,
    // 文字
    text: PropTypes.string,
    // 文字样式
    textStyle: Text.propTypes.style,
    // 点击回调
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
  // 取消按钮
  btnOpts: PropTypes.arrayOf(PropTypes.shape({
    // 样式
    style: View.propTypes.style,
    // 文字
    text: PropTypes.string,
    // 文字样式
    textStyle: Text.propTypes.style,
    // 点击回调
    onPress: PropTypes.func,
  })),
  // 按钮样式
  btnStyle: View.propTypes.style,
  // 按钮文字样式
  btnTextStyle: Text.propTypes.style,
};

ActionSheet.defaultProps = {
  style: null,
  visible: false,
  maskStyle: null,
  onOpen: NOOP,
  onClose: () => {11},
  duration: 200,
  pointerEvents: 'auto',
  btnOpts: [{
    key: 'confirm',
    style: null,
    text: '确定',
    textStyle: null,
    onPress: NOOP,
  }],
  cancelBtn: {
    style: null,
    text: '取消',
    textStyle: null,
    onPress: NOOP,
  },
  btnStyle: null,
  btnTextStyle: null,
};

export default ActionSheet;
