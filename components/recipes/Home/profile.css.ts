import { style } from '@vanilla-extract/css';

const nameContainer = style({
  marginBottom: '1.5em'
})
const descriptionContainer = style({
  lineHeight: 1.5,
})

const textSmall = style({
  fontSize: 12,
});
const textMedium = style({
  fontSize: 14,
});
const textLarge = style({
  fontSize: 20,
});

export const profileStyles = {
  nameContainer,
  descriptionContainer,
  textSmall,
  textMedium,
  textLarge,
};
