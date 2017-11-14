import { StyleSheet } from 'react-native';
import { HAIR_LINE_WIDTH } from '../constant';

const FONT_SIZE = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  flexWarp: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    paddingLeft: 10,
    height: 40,
    fontSize: FONT_SIZE,
    borderColor: '#666',
    borderWidth: HAIR_LINE_WIDTH,
  },
});
