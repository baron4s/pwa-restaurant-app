const changeDisplayWhenHashChanges = () => {
  const currentHash = location.hash;
  const appBar = document.querySelector('.app-bar');
  const heroWrapper = document.querySelector('hero-wrapper');
  if (currentHash === '#/' || !currentHash) {
    appBar.style.background = 'none';
    appBar.style.position = 'absolute';
    heroWrapper.style.display = 'block';
  } else {
    appBar.style.background = '#333333';
    appBar.style.position = 'relative';
    document.querySelector('hero-wrapper').style.display = 'none';
  }
};

export default changeDisplayWhenHashChanges;
