import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { NOOP } from '../constant';
import styles from './style.js';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.hitSlop = {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10,
    };
    this.state = {
      transformSwitch: new Animated.Value(props.value ? 10 : -10),
      backgroundColor: new Animated.Value(props.value ? 75 : -75),
      circleColor: new Animated.Value(props.value ? 75 : -75),
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.animateSwitch = this.animateSwitch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { disabled } = this.props;
    // 禁用, 直接 return
    if (disabled) return;
    this.animateSwitch(nextProps.value);
  }

  animateSwitch(value, cb = NOOP) {
    const duration = this.props.duration;
    Animated.parallel([
      Animated.spring(this.state.transformSwitch, {
        toValue: value ? 10 : -10,
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
  handleSwitch() {
    const { value, onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    onChange(!value);
  }

  render() {
    const { transformSwitch, backgroundColor, circleColor } = this.state;

    const {
      backgroundActive,
      backgroundInactive,
      activeBorderColor,
      deActiveBorderColor,
    } = this.props;

    const interpolatedColorAnimation = backgroundColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [backgroundInactive, backgroundActive],
    });

    const interpolatedBorderColor = circleColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [deActiveBorderColor, activeBorderColor],
    });

    return (
      <TouchableWithoutFeedback onPress={this.handleSwitch} hitSlop={this.hitSlop}>
        <Animated.View
          style={[
            styles.container,
            {backgroundColor: interpolatedColorAnimation},
          ]}
        >
          <Animated.View
            style={[
              styles.animatedContainer,
              {transform: [{ translateX: transformSwitch }]},
            ]}
          >
            <Animated.View
              style={[styles.circle, {backgroundColor: interpolatedBorderColor}]}
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
  activeBorderColor: PropTypes.string,
  // 关闭的边框颜色
  deActiveBorderColor: PropTypes.string,
  // 动画时长
  duration: PropTypes.number,
};

Switch.defaultProps = {
  onChange: () => null,
  value: false,
  disabled: false,
  backgroundActive: 'green',
  backgroundInactive: 'gray',
  activeBorderColor: 'white',
  deActiveBorderColor: 'white',
  duration: 200,
};


export default Switch;
