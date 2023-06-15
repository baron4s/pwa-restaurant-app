const NotificationHalper = {
  checkAvailability() {
    if ('Notification' in window) {
      // eslint-disable-next-line no-unused-expressions
      this._checkPermission() ? console.log('notifiaction ok') : this._requestPermission();
    }
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const result = await Notification.requestPermission();

    if (result === 'default') {
      console.log('Penguna menutup kotak dialog perizinan');
      // eslint-disable-next-line no-useless-return
      return;
    }
    if (result === 'denied') {
      console.log('Penguna tidak mengizinkan fitur notification');
      // eslint-disable-next-line no-useless-return
      return;
    }
  },
};

export default NotificationHalper;
