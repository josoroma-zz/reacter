/**
 * - https://material-ui.com/customization/themes/#palette
 *
 * code node_modules/@material-ui/core/styles/createPalette.d.ts
 * code node_modules/@material-ui/core/colors/common.js
 */

 import color from './color';

const palette =  {
  background: {
    default: color.common.white,
    paper: color.common.white,
  },
  common: {
    black: color.common.black,
    white: color.common.white,
  },
  contrastThreshold: 3,
  divider: color.divider,
  error: color.error,
  primary: color.pink,
  secondary: color.blue,
  text: {
    disabled: color.text.disabled,
    hint: color.text.hint,
    primary: color.text.primary,
    secondary: color.text.secondary,
  },
  tonalOffset: 0.2,
}

export default palette;
