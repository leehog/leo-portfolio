export const fadeIn = (delay) => ({
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay,
    },
  },
})
