import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import { HIT_SLOP, NOOP } from '../constant';
import styles from './style.js';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    onChange(!this.props.checked, this.props.id, this.props.value);
  }

  render() {
    const {
      style,
      onChange,
      checked,
      disabled,
      checkedComponent,
      uncheckedComponent,
      disabledComponent,
    } = this.props;

    let radioEl = null;
    if (disabled) {
      radioEl = disabledComponent;
    } else {
      radioEl = checked ? checkedComponent : uncheckedComponent
    }

    return (
      <View style={[style]}>
        <TouchableWithoutFeedback onPress={disabled ? NOOP : onChange} hitSlop={HIT_SLOP}>
          <View>{radioEl}</View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Radio.propTypes = {
  // id
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // id 对应的值
  value: PropTypes.string,
  // 自定义样式
  style: View.propTypes.style,
  // 是否选中
  checked: PropTypes.bool,
  // 选中组件
  checkedComponent: PropTypes.element,
  // 未选中组件
  uncheckedComponent: PropTypes.element,
  // 禁用组件
  disabledComponent: PropTypes.element,
  // 点击回调
  onChange: PropTypes.func,
  // 是否禁用
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  id: null,
  value: null,
  style: null,
  checked: false,
  checkedComponent: <View style={styles.checked} />,
  uncheckedComponent: <View style={styles.unchecked} />,
  disabledComponent: <View style={styles.disabled} />,
  onChange: NOOP,
  disabled: false,
};

export default Radio;
