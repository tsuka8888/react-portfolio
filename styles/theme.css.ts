import { createGlobalTheme } from '@vanilla-extract/css';

export const defaultTheme = createGlobalTheme(':root', {
  color: {
    primary: '#162C9a',
    sub: '#ffd027',
    backgroundColor: '#EFFFEF',
  },
  font: {
    body: 'arial',
  },
});
