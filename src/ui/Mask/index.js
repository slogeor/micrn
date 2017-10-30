/**
 * 遮罩层
 */
import React, { PropTypes, Component } from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import { NOOP } from '../constant';
import styles from './style';

class Mask extends Component {
  constructor(props) {
    super(props);
    // 控制显示、隐藏
    this.state = {
      visible: props.visible,
    };
    // 默认透明度
    this.opacity = new Animated.Value(props.visible ? 1 : 0);
    // 页面是否 unmount
    this.unmount = false;
    // 显示动画
    this.showAnimate = null;
    // 隐藏动画
    this.hideAnimate = null;
    // 绑定this
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentWillMount() {
    this.showAnimate = Animated.timing(this.opacity, {
      // 终点值
      toValue: 1,
      // 动画时长
      duration: this.props.duration,
    })
    this.hideAnimate = Animated.timing(this.opacity, {
      toValue: 0,
      duration: this.props.duration,
    });
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.state.visible) {
      this.show();
    } else if (!nextProps.visible && this.state.visible) {
      this.hide();
    }
  }

  show() {
    this.hideAnimate.stop();
    if (this.unmount) return;
    this.setState({
      visible: true,
    });
    this.showAnimate.start();
  }

  hide() {
    this.showAnimate.stop();
    this.hideAnimate.start(() => {
      if (this.unmount) return;
      this.setState({
        visible: false,
      });
    });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <Animated.View
          style={[styles.container, { opacity: this.opacity }, this.props.style]}
          pointerEvents={this.props.pointerEvents}
        >
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

Mask.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 点击回调
  onPress: PropTypes.func,
  /**
   * 控制 Mask 是否可以作为触控事件的目标
   * none 发生在本组件与本组件的子组件上的触摸事件都会交给本组件的父组件处理
   * box-none 发生在本组件显示范围内, 但不是子组件显示范围内的事件交给本组件, 在子组件显示范围内交给子组件处理
   * box-only 发生在本组件显示范围内的触摸事件将全部由本组件处理, 即使触摸事件发生在本组件的子组件显示范围内
   * auto 视组件的不同而不同, 并不是所有的子组件都支持box-none和box-only两个值
   */
  pointerEvents: View.propTypes.pointerEvents,
  // 动画时长
  duration: PropTypes.number,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Mask.defaultProps = {
  style: null,
  visible: false,
  onPress: NOOP,
  pointerEvents: 'none',
  duration: 200,
  children: null,
};

export default Mask;
