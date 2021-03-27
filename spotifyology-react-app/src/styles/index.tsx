// import { css, injectGlobal } from 'emotion';
import { css, injectGlobal } from '@emotion/css';
import { isNil } from 'lodash-es';
// import { getParams } from '../utils/native';


export const colors = {
  white: '#F8F5F2',
  leaf: '#5EC29E',
  leafAir: '#E7F5EB',
  leafNight: "#00A876",
  grass: "#85D295",
  grassLite: "#B0DF8C",
  yellow: "#DFEA87",
  blue: "#5780E1",
  red: "#DD7B57",
  gray: "#6A7798",
};

export const boxShadow = 'box-shadow: 0 1px 3px rgba(23, 22, 22, 0.2);';

export const borderRadius = '8px';

export const spacing = {
  milli: '4px',
  centi: '8px',
  deci: '16px',
  regular: '24px',
  hecto: '40px',
  kilo: '48px',
  mega: '64px',
};

export const fontFamilies = {
  Lato: `'Lato'`,
  RobotoMono: `'
  @font-face {
    font-family: 'RobotoMono';
    src: local('Lato'), url(./fonts/RobotoMono-Regular.otf) format('truetype');
  }'`
};



export const fontStyles = {
  rhinotitle: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1.75rem;
  `,
  shark: css`
    font-family: Lato;
    font-weight: 500;
    font-size: 1.38rem;
    line-height: 1.88rem;
  `,
  roboShark: css`
    font-family: Lato;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.88rem;
  `,
  horse: css`
    font-family: Roboto Mono;
    font-weight: 600;
    font-size: 1.13rem;
    line-height: 1.5rem;
  `,
  lion: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 4.06rem;
    line-height: 4.44rem;
  `,
  dog: css`
    font-family: Lato;
    font-weight: 300;
    font-size: 1.5 rem;
    line-height: 1.5rem;
  `,
  cat: css`
    font-family: Roboto Mono;
    font-weight: 400;
    font-size: 0.94rem;
    line-height: 1.31rem;
  `,
  roboCat: css`
    font-family: Roboto Mono;
    font-weight: 400;
    font-size: 0.88rem;
    line-height: 1.31rem;
  `,
  mouse: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 0.81rem;
    line-height: 1.19rem;
  `,
  flea: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.06rem;
  `,
};

export const mediaQuery = {
  small: 'min-width: 576px',
  medium: 'min-width: 768px',
};

export const statusColorMap: { [index: string]: string } = {
  NONE: colors.blue,
  POSITIVE: colors.leaf,
  NEGATIVE: colors.red,
  NEUTRAL: colors.gray,
};
