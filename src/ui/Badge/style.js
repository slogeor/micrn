import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  textWrap: {
    position: 'absolute',
    top: -4,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 10,
    color: '#fff',
    marginTop: -1,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});
