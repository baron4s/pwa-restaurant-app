const DrawerInitiator = {
  init({ hamburgerButton, drawer, content }) {
    hamburgerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(drawer, event);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('menu-active');
  },

  _closeDrawer(drawer, event) {
    event.stopPropagation();
    drawer.classList.remove('menu-active');
  },
};

export default DrawerInitiator;
