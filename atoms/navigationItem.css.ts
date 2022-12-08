import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const navigationItem = {
  container: style({
    listStyle: 'none',
    cursor: 'pointer',
    color: vars.color.primary,
    fontWeight: 'bold',
    width: 150,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }),
};
