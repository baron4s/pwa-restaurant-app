import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './views/components/hero-wrapper';
import './views/components/loading-spinner';
import App from './app';
import swRegister from './utils/sw-register';
import NotificationHalper from './utils/notification';

const app = new App({
  hamburgerButton: document.getElementById('hamburgerButton'),
  drawer: document.querySelector('.menu'),
  content: document.getElementById('content'),
  top: document.getElementById('toTop'),
  navItem: document.querySelectorAll('.menu .menu-list li a '),
});

window.addEventListener('hashchange', () => {
  app._renderPage();
});

window.addEventListener('load', () => {
  app._renderPage();
  swRegister();
  NotificationHalper.checkAvailability();
});
