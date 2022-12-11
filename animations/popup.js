export const popUp = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const popUp2 = (delay) => ({
  offscreen: {
    x: -1000,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.3,
      delay,
    },
  },
})
