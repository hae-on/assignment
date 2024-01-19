import { css } from 'styled-components';

const fonts = css`
  html {
    font-size: 62.5%;
  }
  body,
  button,
  input,
  textarea {
    color: ${({ theme }) => theme.textColors.default};
    font-size: 1.6rem;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }
`;

export default fonts;
