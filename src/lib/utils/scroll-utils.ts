// Scroll utility functions for debugging and managing scroll state

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export const getScrollState = () => {
  if (!isBrowser()) {
    return {
      bodyOverflow: '',
      computedOverflow: '',
      scrollTop: 0,
      scrollLeft: 0,
    };
  }
  return {
    bodyOverflow: document.body.style.overflow,
    computedOverflow: window.getComputedStyle(document.body).overflow,
    scrollTop: window.pageYOffset || document.documentElement.scrollTop,
    scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
  };
};

export const resetScroll = () => {
  if (!isBrowser()) return;
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
};

export const debugScrollState = () => {
  const state = getScrollState();
  if (isBrowser()) console.log('Current scroll state:', state);
  return state;
};
