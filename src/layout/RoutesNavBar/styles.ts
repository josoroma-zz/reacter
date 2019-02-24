import { createStyles } from '@material-ui/core/styles';

/**
 * @param { palette, spacing, transitions }: any
 */
const styles = ({ palette, spacing, typography }: any) => createStyles({
  navLink: {
    color: palette.common.white,
    fontSize: typography.pxToRem(14),
    marginRight: spacing.unit * 3,
    textDecoration: 'none',
    textTransform: 'none',
  },
});

export default styles;
