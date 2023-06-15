const NavActive = {

  init(navItem) {
    const locationHash = location.hash.slice(1);
    localStorage.setItem('nav_active', locationHash);
    const getStorageItem = localStorage.getItem('nav_active');
    const hashname = getStorageItem.split('/');

    this._showActiveNav(hashname, navItem);
  },

  _showActiveNav(hashname, navItem) {
    navItem.forEach((element) => {
      const getAttributeClass = element.getAttribute('class');
      // eslint-disable-next-line func-names
      element.addEventListener('click', function () {
        navItem.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
      });
      if (getAttributeClass.includes(`${hashname[1]}`)) {
        navItem.forEach((item) => item.classList.remove('active'));
        element.classList.add('active');
      }
    });
  },
};

export default NavActive;
