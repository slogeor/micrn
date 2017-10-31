/**
 * Tab 组件，依赖 TabItem 组件
 */
import React from "react"
import PropTypes from 'prop-types';
import { View, Text } from "react-native";
import TabItem from '../TabItem';
import styles from "./style"

function Tab(props) {
  return (
    <View style={[styles.tab, props.style]}>
    {
      props.tabOpts.map((item, key) => (
        <TabItem
          key={item.key}
          title={item.title}
          onPress={item.onPress}
          active={item.active}
          style={props.tabItemstyle}
          tabItemstyle={props.tabItemstyle}
          borderStyle={props.borderStyle}
          activeBorderStyle={props.activeBorderStyle}
          titleStyle={props.titleStyle}
          activeTitleStyle={props.activeTitleStyle}
          {...item.itemStyle}
        />
      ))
    }
    </View>
  );
}

Tab.propTypes = {
  // 自定义容器样式
  style: View.propTypes.style,
  // tab 数据配置
  tabOpts: PropTypes.array.isRequired,
  // 自定义 tabItem 容器样式
  tabItemstyle: View.propTypes.style,
  // 默认底部 border 的样式
  borderStyle: View.propTypes.style,
  // 选中 tab 底部 border 的样式
  activeBorderStyle: View.propTypes.style,
  // title 的样式 当 title 为字符串才生效
  titleStyle: Text.propTypes.style,
  // 选中的 title 样式
  activeTitleStyle: Text.propTypes.style,
};

Tab.defaultProps = {
  style: null,
  tabOpts:[{
    key: '',
    // 标题
    title: '',
    // onPress 事件
    onPress: '',
    active: false,
    itemStyle: {
      // 自定义的样式
      borderStyle: null,
      activeBorderStyle: null,
      titleStyle: null,
      activeTitleStyle: null,
    },
  }],
  // 通用的样式设置
  tabItemstyle: null,
  borderStyle: null,
  activeBorderStyle: null,
  titleStyle: null,
  activeTitleStyle: null,
};

export default Tab;
