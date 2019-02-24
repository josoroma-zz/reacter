/**
 * - https://material-ui.com/style/color/#official-color-tool
 */

// code node_modules/@material-ui/core/index.d.ts
// Please use your own custom colors. Go ahead, do it ;)
export interface IColor {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

// code node_modules/@material-ui/core/colors/blue.js
export const blue: IColor = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

// code node_modules/@material-ui/core/colors/deepOrange.js
export const deepOrange: IColor = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};

// code node_modules/@material-ui/core/colors/grey.js
export const grey: IColor = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};

// code node_modules/@material-ui/core/colors/pink.js
export const pink: IColor = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};

// code node_modules/@material-ui/core/colors/common.js
export const common = {
  black: '#000',
  white: '#fff',
};

// code node_modules/@material-ui/core/styles/createPalette.js
export const divider = blue[100];

// code node_modules/@material-ui/core/styles/createPalette.js
export const error = deepOrange;
export const primary = pink;
export const secondary  = blue;

// code node_modules/@material-ui/core/styles/createPalette.js
export const text = {
  disabled: grey[800],
  hint: grey[800],
  primary: common.black,
  secondary: grey[900],
};

const color = {
  blue,
  common,
  divider,
  error,
  grey,
  pink,
  primary,
  secondary,
  text,
};

export default color;
