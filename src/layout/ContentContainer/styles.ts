import { createStyles } from '@material-ui/core/styles';

/**
 * @param { palette, spacing, transitions }: any) =>
 */
const styles = ({ palette, spacing, transitions }: any) => createStyles({
  paper: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: 'none',
    margin: 'auto',
    maxWidth: 500,
    padding: spacing.unit * 2,
  },
  root: {
    flexGrow: 1,
  },
});

export default styles;
