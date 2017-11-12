import { StyleSheet } from 'react-native';

const FONT_SIZE = 16;

export default StyleSheet.create({
  all: {
    flex: 1,
    height: 50,
    position: 'relative',
  },
  input: {
    paddingLeft: 0,
    fontSize: FONT_SIZE,
  },
  fill: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  fillHide: {
    left: 1000,
  },
  placeholder: {
    color: '#999',
    fontSize: FONT_SIZE,
  },
});
