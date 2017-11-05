import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: 50,
    height: 50,
  },
  textContainerStyle: {
    right: 5,
    top: 0,
    backgroundColor: '#ff5200',
  },
  icon: {
    color: '#999',
    fontSize: 21,
    marginBottom: 4,
  },
  text: {
    color: '#666',
    fontSize: 12,
  },
});
