import { style } from '@vanilla-extract/css';
import { defaultTheme } from '../../../styles/theme.css';

const container = style({
  background: defaultTheme.color.backgroundColor,
  minHeight: '100dvh',
  fontFamily: 'Grandstander',
});

const wrapper = style({
  padding: '0 2em',
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
