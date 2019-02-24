import { createStyles } from '@material-ui/core/styles';

/**
 * @param { palette, spacing, transitions }: any
 */
const styles = ({ spacing }: any) => createStyles({
  fileInput: {
    display: 'none',
  },
  form: {
    marginTop: spacing.unit * 2,
  },
});

export default styles;
