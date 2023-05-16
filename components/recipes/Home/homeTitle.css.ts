import { style } from '@vanilla-extract/css';

const container = style({});

const imageWrapper = style({
  width: '100%',
});

const image = style({
  maxWidth: '100%',
});

export const homeTitleStyles = {
  container,
  imageWrapper,
  image
};
