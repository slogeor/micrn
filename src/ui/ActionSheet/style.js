import { StyleSheet } from 'react-native';
import { MASK_COLOR, HAIR_LINE_WIDTH } from '../constant';

const BTN_COLOR = '#157efb';
const BTN_HEIGHT = 57;
const BTN_FONT_SIZE = 20;
const BORDER_RADIUS = 12;

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  mask: {
    backgroundColor: MASK_COLOR,
  },
  // for android
  btnFirst: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  // for android
  btnLast: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  btn: {
    flex: 1,
    height: BTN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: HAIR_LINE_WIDTH,
  },
  btnText: {
    color: BTN_COLOR,
    fontSize: BTN_FONT_SIZE,
  },
  btnList: {
    marginBottom: 7,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  cancelBtn: {
    borderRadius: BORDER_RADIUS,
  },
  cancelBtnText: {
    fontWeight: 'bold',
  },
});
