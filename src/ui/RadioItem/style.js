import { StyleSheet } from 'react-native';
import { HAIR_LINE_WIDTH } from '../constant';

export default StyleSheet.create({
  checked: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FF5200',
    overflow: 'hidden',
  },
  checkedIcon: {
    fontSize: 14,
    color: '#FFF',
  },
  unchecked: {
    width: 20,
    height: 20,
    borderWidth: HAIR_LINE_WIDTH,
    borderRadius: 20,
    borderColor: '#999',
  },

  disabled: {
    width: 20,
    height: 20,
    borderWidth: HAIR_LINE_WIDTH,
    borderRadius: 20,
    backgroundColor: '#888',
    borderColor: '#FFF',
  }
});
