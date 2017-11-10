import { StyleSheet } from 'react-native';
import { HAIR_LINE_WIDTH } from '../constant';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 40,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  animatedContainer: {
    flex: 1,
    width: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    left: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'white',
    borderWidth: HAIR_LINE_WIDTH,
    borderColor: 'rgb(100, 100, 100)',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
