import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const homeTemplateStyles = {
  title: style({
    backgroundColor: vars.color.primary,
    color: vars.color.sub,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    height: '70vh',
    whiteSpace: 'pre-wrap',
  }),
  navigation: style({
    padding: '10px 0',
    boxShadow: '0 0px 20px 0 rgba(0, 0, 0, .25)',
  }),
};
