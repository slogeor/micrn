import { StyleSheet } from 'react-native';
import { ACTIVE_OPACITY } from '../constant';

const COLOR_THEME = '#FF5000';

export default StyleSheet.create({
  container: {
    height: 45,
    overflow: 'hidden',
    backgroundColor: COLOR_THEME,
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
  },
});

