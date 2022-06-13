import hIcon from './homeIcon.svg';
const body = document.body;
// Icon
const homeIcon = new Image ();
homeIcon.src = hIcon;

// Main
const main = () => {
  const main = document.createElement('main');
  body.appendChild(main);
}

// Navbar
const nav = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('nav');
  navbar.innerHTML = `
  <img src= alt="home">
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
