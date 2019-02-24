import { createMuiTheme } from '@material-ui/core/styles';

import color from './color';
import palette from './palette';
import sizing from './sizing';
import spacing from './spacing';
import typography, { pxToRem } from './typography';

const theme = createMuiTheme({
  overrides: {
    // Component
    MuiButton: {
      root: {
        // Add Form errors spacing.
        marginBottom: spacing.unit,
        marginTop: spacing.unit,
      },
      sizeLarge: {
        fontSize: pxToRem(14),
      },
      // Variant
      text: {
        '&:hover': {
          backgroundImage: `linear-gradient(247.3deg, ${color.blue[700]}, ${color.blue[500]})`,
          boxShadow: `0 1px 5px 0px ${color.blue[200]}`,
        },
        backgroundImage: `linear-gradient(247.3deg, ${color.blue[800]}, ${color.blue[600]})`,
        border: 0,
        borderRadius: sizing.borderRadius,
        boxShadow: `0 1px 5px 0px ${color.blue[100]}`,
        color: palette.common.white,
      },
    },
    // Component.
    MuiFormControl: {
      root: {
        backgroundColor: palette.background.default,
        padding: spacing.unit * 2,
        width: '100%',
      }
    },
    // Component.
    MuiGrid: {
      container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      },
      item: {
        boxSizing: 'border-box',
        margin: '0',
      },
    },
    // Component.
    MuiInputBase: {
      input: {
        '&:focus': {
          borderColor: color.blue[300],
          borderRadius: sizing.borderRadius,
          boxShadow: 'none',
        },
        backgroundColor: 'white',
        border: `1px solid ${color.blue[100]}`,
        borderRadius: sizing.borderRadius,
        fontSize: 14,
        padding: '10px 12px',
      },
      root: {
        'label + &': {
          marginTop: spacing.unit,
        },
        // Add Form errors spacing.
        marginBottom: spacing.unit,
      },
    },
    // Component.
    MuiInputLabel: {
      formControl: {
        left: spacing.unit * 2,
      },
      root: {
        color: color.grey[500],
      }
    },
    // Component.
    MuiTypography: {
      // Variants
      body1: {
        color: color.grey[700],
        fontSize: pxToRem(14),
      },
      body2: {
        color: color.grey[500],
        fontSize: pxToRem(12),
      },
      h1: {
        color: color.common.black,
        fontSize: pxToRem(22),
        fontWeight: 'bold',
      },
      subtitle1: {
        color: color.pink[700],
        fontSize: pxToRem(20),
      },
      subtitle2: {
        color: color.pink[500],
        fontSize: pxToRem(18),
      },
    },
  },
  palette,
  spacing: {
    unit: spacing.unit,
  },
  typography,
});

export default theme;
