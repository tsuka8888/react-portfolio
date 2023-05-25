import { keyframes, style } from '@vanilla-extract/css';

const container = style({
  height: '100dvh',
  position: 'relative',
});

const header = style({
  backgroundColor: 'white',
  padding: '1rem',
  height: '7%',
  borderBottom: '1px solid #ccc',
});

const name = style({
  fontSize: '1.4rem',
  lineHeight: 1.2,
});

const position = style({
  fontSize: '0.8rem',
});

const nameH1 = style({
  color: '#333',
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const main = style({
  margin: 'auto',
  height: '93%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  // backgroundColor: 'skyblue',
});

const characterImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  // animationName: translate,
  // animationDuration: '1s',
  // transitionTimingFunction: 'initial',
});

const circle1 = style({
  position: 'absolute',
  width: 390,
  height: 400,
  background: '#84a2d4',
  borderRadius: '80% 30% 50% 50%/50%',
  animationName: rotate,
  animationDuration: '10s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  mixBlendMode: 'multiply',
})
const circle2 = style({
  position: 'absolute',
  width: 400,
  height: 390,
  background: '#0067C0',
  borderRadius: '48% 62% 57% 58% / 57% 45% 45% 60%',
  animationName: rotate,
  animationDuration: '10s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  mixBlendMode: 'multiply',
})
const circle3 = style({
  position: 'absolute',
  width: 410,
  height: 410,
  background: '#0095d9',
  borderRadius: '40% 40% 50% 40%/30% 50% 50% 50%',
  animationName: rotate,
  animationDuration: '10s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  mixBlendMode: 'multiply',
})

export const homeTitleStyles = {
  container,
  header,
  name,
  nameH1,
  position,
  main,
  characterImage,
  circle1,
  circle2,
  circle3,
};
