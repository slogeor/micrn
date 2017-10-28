/**
 * TabBar item 组件
 */

import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Badge from 'rnx-ui/Badge';
import { Icon } from 'BizComponent';
import {
  COLOR_MAIN,
  COLOR_NEUTRALGRAY,
  COLOR_GRAY,
  STYLE_FC_VC_HC,
} from 'BizStyle';

const styles = StyleSheet.create({
  all: {
    ...STYLE_FC_VC_HC,
    width: 50,
    height: 50,
  },
  textContainerStyle: {
    right: 5,
    top: 0,
    backgroundColor: COLOR_MAIN,
  },
  icon: {
    color: COLOR_NEUTRALGRAY,
    fontSize: 21,
    marginBottom: 4,
  },
  text: {
    color: COLOR_GRAY,
    fontSize: 12,
  },
});

function TabBarItem(props) {
  return (
    <Badge
      style={[styles.all, props.style]}
      text={props.badgeText}
      textStyle={props.textStyle}
      textContainerStyle={[styles.textContainerStyle, props.textContainerStyle]}
    >
      <Icon
        name={props.iconName}
        style={[styles.icon, {
          color: props.color,
        }, props.iconStyle]}
      />
      <Text
        style={[styles.text, {
          color: props.color,
          fontWeight: props.labelWeight,
        }]}
      >
        {props.title}
      </Text>
    </Badge>
  );
}

TabBarItem.propTypes = {
  style: View.propTypes.style,
  badgeText: Badge.propTypes.text,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconStyle: Text.propTypes.style,
  color: PropTypes.string,
  labelWeight: PropTypes.string,
  textStyle: Text.propTypes.style,
  textContainerStyle: View.propTypes.style,
};
TabBarItem.defaultProps = {
  style: null,
  badgeText: Badge.defaultProps.text,
  iconName: '',
  title: '',
  color: '#666',
  labelWeight: '400',
};

export default TabBarItem;
