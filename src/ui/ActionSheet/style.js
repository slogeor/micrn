import { StyleSheet } from 'react-native';

const COLOR_SYSTEM = '#157efb';
const BORDER_RADIUS = 12;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: StyleSheet.hairlineWidth,
  },
  btnText: {
    color: COLOR_SYSTEM,
    fontSize: 20,
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

export default styles;
