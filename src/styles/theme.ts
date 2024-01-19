const colors = {
  white: '#FFFFFF',
  gray: '#D9D9D9',
  gray1: '#C1C1C1',
  gray2: '#B5B5B5',
  black: '#000000',
  orange: '#F75A2F',
  transparentOrange: 'rgba(247, 90, 47, 0.1)',
} as const;

const textColors = {
  default: colors.black,
} as const;

const backgroundColors = {
  default: colors.white,
} as const;

const borderColors = {
  default: colors.gray2,
} as const;

const borderRadius = {
  default: '10px',
} as const;

const theme = {
  colors,
  textColors,
  backgroundColors,
  borderColors,
  borderRadius,
};

export default theme;
