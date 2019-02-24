import { createStyles } from '@material-ui/core/styles';

/**
 * @param { palette, spacing, transitions }: any) =>
 */
const styles = ({ palette, spacing }: any) => createStyles({
  snackbar: {
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: spacing.unit * 2,
    marginBottom: spacing.unit * 4,
    position: "relative",
    width: 500 - (spacing.unit * 8),
  },
  snackbarContentError: {
    backgroundColor: palette.error[700],
  },
  snackbarContentSuccess: {
    backgroundColor: palette.secondary[700],
  },
  snackbarContentTypographyError: {
    color: palette.common.white,
  },
  snackbarContentTypographySuccess: {
    color: palette.common.white,
  }
});

export default styles;
