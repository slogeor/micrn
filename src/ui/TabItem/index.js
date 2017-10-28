/**
 * TabItem item 组件
 */
import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  COLOR_DARKGRAY,
  COLOR_WHITE,
  FONT_14,
} from 'BizStyle';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLOR_WHITE,
  },
});

function TabItem(props) {
  return (
    <View
      style={[styles.all, {
        borderBottomColor: props.borderColor,
      }, props.style]}
    >
      <Text
        style={{
          color: props.color,
          fontWeight: props.fontWeight,
          fontSize: FONT_14,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

TabItem.propTypes = {
  style: View.propTypes.style,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  fontWeight: PropTypes.string,
};

TabItem.defaultProps = {
  style: null,
  title: '',
  color: COLOR_DARKGRAY,
  borderColor: '#fff',
  fontWeight: 'normal',
};

export default TabItem;
