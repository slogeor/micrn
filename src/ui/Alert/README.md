### Alert

在 Dialog 组件进行了封装，只支持 title 和 onPress，同时也继承 Dialog 属性。

#### 使用方法

```js
<Alert
  visible={this.state.visible}
  onPress={this.hide}
  titleStyle={styles.text}
/>
```

#### 具体效果

<img src="./demo.png" width = "320"  alt="图片名称" align=center />

#### props

```js
Alert.propTypes = {
  ...Dialog.propTypes,
  // title
  title: PropTypes.string,
  // 按钮
  btnTex: PropTypes.string,
  // 按钮样式
  btnTexStyle: Text.propTypes.style,
  // 按钮回调
  onPress: PropTypes.func,
};
```

#### 默认值

```js
Alert.defaultProps = {
  ...Dialog.defaultProps,
  title: 'title',
  btnTex: 'Ok',
  btnTexStyle: null,
  onPress: NOOP,
};
```
