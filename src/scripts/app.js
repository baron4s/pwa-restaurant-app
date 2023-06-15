import Routs from './routes/routes';
import UrlParser from './routes/url-parse';
import InitiatorButtonTop from './utils/buttonTop-initiator';
import DrawerInitiator from './utils/drawer-initiator';
import changeDisplayWhenHashChanges from './utils/hash-view';
import NavActive from './utils/nav-active';
import './views/components/error-load';

class App {
  constructor({
    hamburgerButton, drawer, content, top, navItem,
  }) {
    this._hamburgerButton = hamburgerButton;
    this._drawer = drawer;
    this._content = content;
    this._top = top;
    this._navItem = navItem;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerButton: this._hamburgerButton,
      drawer: this._drawer,
      content: this._content,
    });
    InitiatorButtonTop.init(this._top);
    NavActive.init(this._navItem);
    const mainSection = document.querySelector('#content');
    const skipLinkElement = document.querySelector('.skip-content');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      mainSection.scrollIntoView({ behavior: 'smooth' });
      skipLinkElement.blur();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _showLoading() {
    document.querySelector('loader-spinner').classList.remove('hidden-loading');
    document.querySelector('loader-spinner').classList.add('show-loading');
  }

  // eslint-disable-next-line class-methods-use-this
  _hideLoading() {
    document.querySelector('loader-spinner').classList.remove('show-loading');
    document.querySelector('loader-spinner').classList.add('hidden-loading');
  }

  async _renderPage() {
    this._showLoading();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = Routs[url];
      console.log(page);
      changeDisplayWhenHashChanges();
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = '<error-load> </error-load>';
    } finally {
      this._hideLoading();
    }
  }
}

export default App;
