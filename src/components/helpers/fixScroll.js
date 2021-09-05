const fixScroll = () => {
  window.scrollTo({
    top: 99999999999,
    left: 0,
    behavior: 'smooth',
  });
};

export default fixScroll;
