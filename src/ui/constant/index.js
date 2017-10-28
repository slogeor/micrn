/**
 * ui 组件依赖的常量
 */

import { Platform, Dimensions } from 'react-native';

// 页面宽度
export const { width, height, statusBarHeight } = Dimensions.get('window');
// 平台
export const IS_IOS  = Platform.OS === 'ios';
// status bar 的高度
export const STATUS_BAR_HEIGHT = IS_IOS ? 20 : 0;
// header 的高度
export const HEADER_HEIGHT = IS_IOS ? 44 : 56;
// 空函数
export const NOOP = () => {};
// 点击时不透明度
export const ACTIVE_OPACITY = 0.8;
