
import { StyleSheet } from 'react-native';

const ACTIVE_COLOR = '#FF5200';
const DEFAULT_COLOR = '#666';

export default StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  border: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: DEFAULT_COLOR,
  },
  activeBorder: {
    borderBottomColor: ACTIVE_COLOR,
  },
  tabTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: DEFAULT_COLOR,
    fontWeight: 'bold',
  },
  activeTabTitle: {
    color: ACTIVE_COLOR,
  },
});
