/**
 * code node_modules/@material-ui/core/Typography/Typography.js
 *
 * code node_modules/@material-ui/core/styles/createTypography.js
 *
 *  - https://material-ui.com/style/typography
 *
 * You should use `theme.typography.pxToRem(size: number)` in your styles.
 */

const typography = {
  htmlFontSize: 16,
  useNextVariants: true,
};

export default typography;

const coef = typography.htmlFontSize / typography.htmlFontSize - 2;

export const pxToRem: any = (size: any): any => {
  const remSize = size / typography.htmlFontSize * coef;

  return `${Math.abs(remSize)}rem`;
}
