import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { NOOP } from '../constant';
import Dialog from '../Dialog';

function Alert(props) {
  return (
    <Dialog
      {...props}
      btnOpts={[{
        title: props.btnTex,
        style: props.btnTexStyle,
        onPress: props.onPress,
      }]}
    />
  );
}

Alert.propTypes = {
  ...Dialog.propTypes,
  // 按钮
  btnTex: PropTypes.string,
  // 按钮样式
  btnTexStyle: Text.propTypes.style,
  // 按钮回调
  onPress: PropTypes.func,
};

Alert.defaultProps = {
  ...Dialog.defaultProps,
  btnTex: 'Ok',
  btnTexStyle: null,
  onPress: NOOP,
};

export default Alert;
