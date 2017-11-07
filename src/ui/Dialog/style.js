import { StyleSheet } from 'react-native';
import { HAIR_LINE_WIDTH } from '../constant';

const BORDER_RADIUS = 10;
const COLOR_BORDER = '#EEE';
const TEXT_COLOR = '#666';

export default StyleSheet.create({
  mask: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    width: 280,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  content: {
    textAlign: 'center',
    lineHeight: 16,
  },
  btnWrap: {
    flexDirection: 'row',
    borderTopWidth: HAIR_LINE_WIDTH,
    borderColor: COLOR_BORDER,
    height: 45,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: HAIR_LINE_WIDTH,
    borderColor: COLOR_BORDER,
  },
  firstBtn: {
    borderLeftWidth: 0,
  },
  btnText: {
    color: TEXT_COLOR,
    fontSize: 17,
  },
});
