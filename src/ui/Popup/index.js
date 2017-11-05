/**
 * 弹出层，从底部弹出
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import { NOOP } from '../constant';
import Mask from '../Mask';
import styles from './style';

class Popup extends Component {
  constructor(props) {
    super(props);
    // 距离
    this.animDistance =  new Animated.Value(0);
    // 高度
    this.height = null;
    // 显示动画
    this.showAnimation = this.generateAnimation(this.height);
    // 隐藏动画
    this.hideAnimation = this.generateAnimation(0);

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.generateAnimation = this.generateAnimation.bind(this);
  }

  // 默认显示情况
  componentWillMount() {
    if (this.props.visible) {
      this.show();
    }
  }

  componentWillReceiveProps(nextProps) {
    const visible = this.props.visible;
    if (nextProps.visible && !visible) {
      // 显示
      this.show();
    } else if (!nextProps.visible && visible) {
      // 隐藏
      this.hide();
    }
  }

  // 获取高度
  getHeight(e) {
    const { height } = e.nativeEvent.layout;
    if (height !== this.height) {
      this.height = height;
      this.showAnimation = this.generateAnimation(-height);
    }
  }

  generateAnimation(toValue = 0) {
    return Animated.timing(this.animDistance, {
      toValue,
      duration: this.props.duration,
    });
  }


  // 显示
  show() {
    if (this.height === null) {
      // 组件未渲染
      setTimeout(() => {
        this.show();
      }, 50);
      return;
    }
    this.hideAnimation.stop();
    this.showAnimation.start(() => {
      this.props.onOpen();
    });
  }

  // 隐藏
  hide() {
    this.showAnimation.stop();
    this.hideAnimation.start(() => {
      this.props.onClose();
    });
  }

  render() {
    return (
      <Mask
        visible={this.props.visible}
        style={[styles.mask, this.props.maskStyle]}
        onPress={this.props.onPress}
        pointerEvents={this.props.pointerEvents}
      >
        <View style={styles.container}>
          <Animated.View
            style={[styles.wrap, { top: this.animDistance }, this.props.style]}
            onLayout={this.getHeight}
          >
            {this.props.children}
          </Animated.View>
        </View>
      </Mask>
    );
  }
}

Popup.propTypes = {
  // 控制开发
  visible: PropTypes.bool.isRequired,
  // 遮罩层的样式
  maskStyle:  View.propTypes.style,
  // 点击遮罩层事件
  onPress: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 动画时长
  duration: PropTypes.number,
  // 打开回调
  onOpen: PropTypes.func,
  // 关闭回调
  onClose: PropTypes.func,
  // 事件默认透传
  pointerEvents: View.propTypes.pointerEvents,
};

Popup.defaultProps = {
  visible: false,
  maskStyle: null,
  onPress: NOOP,
  style: null,
  children: null,
  duration: 200,
  onOpen: NOOP,
  onClose: NOOP,
  pointerEvents: 'auto',
};

export default Popup;
