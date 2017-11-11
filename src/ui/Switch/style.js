import { StyleSheet } from 'react-native';
import { HAIR_LINE_WIDTH } from '../constant';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    left: 0,
    backgroundColor: '#fff',
    borderWidth: HAIR_LINE_WIDTH,
    borderColor: 'rgb(100, 100, 100)',
  },
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
