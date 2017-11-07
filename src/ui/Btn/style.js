import { StyleSheet } from 'react-native';

const COLOR = '#FF5000';

export default StyleSheet.create({
  container: {
    height: 45,
    overflow: 'hidden',
    backgroundColor: COLOR,
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

