import { StyleSheet } from 'react-native';

const SIDE_GAP = 10;
const COLOR_WHITE = '#fff';

export default StyleSheet.create({
  navBar: {
    position: 'relative',
    backgroundColor: '#2F3549',
  },

  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: SIDE_GAP,
  },

  titleWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: COLOR_WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  btnWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    color: COLOR_WHITE,
  },
});
