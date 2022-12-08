import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#162C9a',
    sub: '#ffd027',
  },
  font: {
    body: 'arial',
  },
});
