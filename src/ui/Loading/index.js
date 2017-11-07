/**
 * 菊花加载中组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import Mask from '../Mask';
import styles from './style';

function Loading(props) {
  return (
    <Mask
      visible={props.visible}
      style={[styles.mask, props.maskStyle]}
    >
      <View style={[styles.loading, props.loadingStyle]}>
        <ActivityIndicator animating color={props.color} size={props.size} />
      </View>
    </Mask>
  );
}

Loading.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  maskStyle: View.propTypes.style,
  // 菊花容器样式
  loadingStyle: View.propTypes.style,
  // 滚轮的前景颜色（默认为灰色)
  color: ActivityIndicator.propTypes.color,
  // 指示器的大小[small、large]. small 的高度为 20, large 为 36
  size: ActivityIndicator.propTypes.size,
};

Loading.defaultProps = {
  visible: false,
  maskStyle: null,
  loadingStyle: null,
  color: '#fff',
  size: 'small',
};

export default Loading;
