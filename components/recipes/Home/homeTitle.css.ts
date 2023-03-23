import { style } from '@vanilla-extract/css';

const container = style({
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  height: 200,
});

const titleContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
})

const title = style({
  fontSize: 20,
  whiteSpace: 'pre-wrap',
});

const subTitle = style({
  fontSize: 14,
});

const imageContainer = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
})

export const homeTitleStyles = {
  container,
  titleContainer,
  title,
  subTitle,
  imageContainer,
};
