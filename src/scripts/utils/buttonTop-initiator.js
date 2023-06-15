const InitiatorButtonTop = {
  init(top) {
    const _top = top;
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-unused-expressions
      window.scrollY > 50 ? _top.classList.add('top-show') : _top.classList.remove('top-show');
    });

    this._activateScrollButton(_top);
  },

  _activateScrollButton(top) {
    top.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
};

export default InitiatorButtonTop;
