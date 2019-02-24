import { createStyles } from '@material-ui/core/styles';

/**
 * Style heavily inspired by:
 *
 *  - https://github.com/Availity/react-block-ui/blob/master/src/style.css
 *
 * @param { palette, spacing, transitions }: any) =>
 */
const styles = ({ palette, spacing }: any) => createStyles({
  blockContainer: {
    '&:focus': {
      outline: 'none',
    },
    bottom: 0,
    cursor: 'wait',
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
  blockOverlay: {
    backgroundColor: palette.common.white,
    height: '100%',
    opacity: 0.3,
    width: '100%',
  },
  circularProgressBg: {
    background: palette.common.white,
    borderRadius: '50%',
    padding: 24,
  },
  circularProgressContainer: {
    alignContent: 'center',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: spacing.unit * 8,
    width: '100%',
    zIndex: 2000,
  },
  root: {
    //
  }
});

export default styles;
