/**
 * 页面正文组件
 */

import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import {
  OfflineView,
  StationException,
} from 'BizComponent';
import { IS_IOS } from 'BizConstant';
import Loading from 'rnx-ui/Loading';
import style from './style';

const NAVBAR_HEIGHT = IS_IOS ? 44 : 56;

function Body(props) {
  return (
    <View style={[style.container, props.style]}>
      {/* 断网 */}
      {!props.isOnline && <OfflineView reTry={props.reTry} />}
      {/* 接口挂了 */}
      {props.isOnline && !props.isApiNotError &&
        <OfflineView reTry={props.reTry} showHelp={false} tips="网络请求失败，请稍后重试" />}
      {/* 数据还没有ok */}
      {props.isOnline && !props.showLoading &&
      <Loading
        visible
        size="large"
        color="rgba(0, 0, 0, 0.5)"
        overlayStyle={{ backgroundColor: '#FFF' }}
        loaderStyle={{
          backgroundColor: 'transparent',
          marginTop: -NAVBAR_HEIGHT,
        }}
      />
      }
      {/* 子元素 */}
      {props.isOnline && props.isApiNotError && props.showLoading && props.children}
      <StationException
        visible={!props.stationStatus}
        source={props.viewSource}
        content={props.stationContent}
        leftBtnContent={props.stationLeftCont}
        rightBtnContent={props.stationRightCont}
        rightViewName={props.rightViewName}
        leftViewName={props.leftViewName}
        dialogType={props.dialogType}
      />
    </View>
  );
}

Body.propTypes = {
  // 网络情况 true: 有网, false: 断网
  isOnline: PropTypes.bool,
  // 页面接口是否不是挂了 true: 没有挂, false: 挂了
  isApiNotError: PropTypes.bool,
  // 断网重试
  reTry: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // 数据是否ok
  showLoading: PropTypes.bool,
  // 自提点免战牌
  // 页面来源
  viewSource: PropTypes.string,
  // 自提点状态
  stationStatus: PropTypes.bool,
  // 标题
  stationContent: PropTypes.string,
  // 左边按钮文案
  stationLeftCont: PropTypes.string,
  // 右边按钮状态
  stationRightCont: PropTypes.string,
  rightViewName: PropTypes.string,
  leftViewName: PropTypes.string,
  dialogType: PropTypes.string,
};
Body.defaultProps = {
  isOnline: true,
  isApiNotError: true,
  reTry: () => {},
  stationStatus: true,
  children: null,
  style: null,
  showLoading: true,
};

export default Body;
