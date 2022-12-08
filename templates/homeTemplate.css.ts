import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const homeTemplateStyles = {
  container: style({
    backgroundColor: vars.color.primary,
    color: vars.color.sub,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    height: '80vh',
    whiteSpace: 'pre-wrap',
  }),
};
