import hIcon from './images/homeIcon.svg';
import './styles.css';
const body = document.body;
// Icon
const homeIcon = new Image ();
homeIcon.src = hIcon;
homeIcon.classList.add('homeIcon')

// Main
const main = () => {
  const main = document.createElement('main');
  body.appendChild(main);
}

// Navbar
const nav = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('nav', 'container');
  navbar.innerHTML = `
  ${homeIcon.outerHTML}
  <div class="tabs">
  <h2>Menu</h2>
  <h2>About</h2>
  </div>`;
  body.append(navbar);
}

// Home elements
const home = () =>{
  const container = document.createElement('div');
container.classList.add('container', 'container--home');
body.appendChild(container);
  }
nav();
home();
