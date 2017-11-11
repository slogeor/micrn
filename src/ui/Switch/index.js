import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { NOOP, HIT_SLOP } from '../constant';
import styles from './style.js';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.transforX = (props.switchWidth - props.switchHeight) / 2;
    this.state = {
      // transform
      changeTransform: new Animated.Value(props.value ? this.transforX : -this.transforX),
      // 背景样式
      backgroundColor: new Animated.Value(props.value ? 75 : -75),
      // 圆圈的样式
      circleColor: new Animated.Value(props.value ? 75 : -75),
    };
    // 变化
    this.handleChange = this.handleChange.bind(this);
    // 动画
    this.changeAnimation = this.changeAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { disabled } = this.props;
    // 禁用, 直接 return
    if (disabled) return;
    this.changeAnimation(nextProps.value);
  }

  changeAnimation(value, cb = NOOP) {
    const duration = this.props.duration;
    Animated.parallel([
      Animated.spring(this.state.changeTransform, {
        toValue: value ? this.transforX : -this.transforX,
        duration,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration,
      }),
      Animated.timing(this.state.circleColor, {
        toValue: value ? 75 : -75,
        duration,
      }),
    ]).start(cb);
  }

  // 处理点击事件
  handleChange() {
    const { value, onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    onChange(!value);
  }

  render() {
    const { changeTransform, backgroundColor, circleColor } = this.state;

    const {
      switchWidth,
      switchHeight,
      backgroundActive,
      backgroundInactive,
      activeCircleColor,
      deActiveCircleColor,
    } = this.props;

    const backgroundColorAnimation = backgroundColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [backgroundInactive, backgroundActive],
    });

    const circleColorAnimation = circleColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [deActiveCircleColor, activeCircleColor],
    });

    return (
      <TouchableWithoutFeedback onPress={this.handleChange} hitSlop={HIT_SLOP}>
        <Animated.View
          style={[
            styles.container,
            {
              width: switchWidth,
              height: switchHeight,
              borderRadius: switchHeight,
              backgroundColor: backgroundColorAnimation,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.animatedContainer,
              {transform: [{ translateX: changeTransform }]},
            ]}
          >
            <Animated.View
              style={[
                styles.circle,
                {
                  width: switchHeight,
                  height: switchHeight,
                  borderRadius: switchHeight / 2,
                  backgroundColor: circleColorAnimation,
                }
              ]}
            />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

Switch.propTypes = {
  // change callback
  onChange: PropTypes.func,
  // 开关的状态
  value: PropTypes.bool,
  // 是否禁用
  disabled: PropTypes.bool,
  // 打开的背景色
  backgroundActive: PropTypes.string,
  // 关闭的背景色
  backgroundInactive: PropTypes.string,
  // 打开的边框颜色
  activeCircleColor: PropTypes.string,
  // 关闭的边框颜色
  deActiveCircleColor: PropTypes.string,
  // 动画时长
  duration: PropTypes.number,
  // 宽度
  switchWidth: PropTypes.number,
  // 高度
  switchHeight: PropTypes.number,
};

Switch.defaultProps = {
  onChange: () => null,
  value: false,
  disabled: false,
  backgroundActive: '#FF5200',
  backgroundInactive: '#888',
  activeCircleColor: '#FFF',
  deActiveCircleColor: '#FFF',
  duration: 200,
  switchWidth: 70,
  switchHeight: 30,
};

export default Switch;
