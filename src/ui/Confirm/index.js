import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { NOOP } from '../constant';
import Dialog from '../Dialog';
import styles from './style';

function Confirm(props) {
  return (
    <Dialog
      {...props}
      btnOpts={[
        {
          key: 'cancel',
          title: props.cancelTitle,
          onPress: props.onCancel,
          style: [styles.cancelText, props.cancelTitleStyle],
        },
        {
          key: 'confirm',
          title: props.confirmTitle,
          onPress: props.onConfirm,
          style: [props.confirmTitleStyle],
        }
      ]}
    />
  );
}

Confirm.propTypes = {
  ...Dialog.propTypes,
  // 取消文本
  cancelTitle: PropTypes.string,
  // 取消文本样式
  cancelTitleStyle: Text.propTypes.style,
  // 取消点击回调
  onCancel: PropTypes.func,
  // 确认文本
  confirmText: PropTypes.string,
  // 确认文本样式
  confirmTextStyle: Text.propTypes.style,
  // 确认点击回调
  onConfirm: PropTypes.func,
};

Confirm.defaultProps = {
  ...Dialog.defaultProps,
  cancelTitle: '取消',
  cancelTitleStyle: null,
  onCancel: NOOP,
  confirmTitle: '确认',
  confirmTitleStyle: null,
  onConfirm: NOOP,
};

export default Confirm;
