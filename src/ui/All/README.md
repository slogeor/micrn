### All

#### props

```js
All.propTypes = {
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // 是否隐藏状态栏
  hidden: PropTypes.bool,
  // StatusBar 背景色，仅对 Android 生效
  statusBarBgColor: PropTypes.string,
  /**
   * StatusBar 样式类型
   * default: 默认的样式（IOS为白底黑字、Android为黑底白字）
   * light-content: 黑底白字
   * dark-content: 白底黑字
   */
  statusBarStyle: PropTypes.string,

};
```

#### 默认值

```js
All.defaultProps = {
  style: null,
  hidden: false,
  children: null,
  statusBarBgColor: 'transparent',
  statusBarStyle: 'light-content',
};
```
