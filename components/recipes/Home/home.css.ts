import { style } from '@vanilla-extract/css';
import { defaultTheme } from '../../../styles/theme.css';

const container = style({
  minHeight: '100dvh',
});

const wrapper = style({
  // padding: '0 2em',
});

const homeTitle = style({
  padding: '5em 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const homeContainerStyles = {
  container,
  wrapper,
  homeTitle,
};
