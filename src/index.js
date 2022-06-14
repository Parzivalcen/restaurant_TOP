// JS Modules
import navBar from './nav';
// Pages
import homePage from './pages/home';
import menuPage from './pages/menu';
import aboutPage from './pages/about';
// Assets

import './styles.css';
const body = document.body;
// Icon


// Main
const main = () => {
  const main = document.createElement('main');
  main.id = 'main'
  body.appendChild(main);
}
// const main = document.querySelector('#main');
// Navbar
body.append(navBar())
// Main
main();
const mainCont = document.querySelector('#main')
mainCont.appendChild(homePage())

// menu
// if the container exist we need to remove it 
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  if(document.querySelector('.bg-home')){
    document.querySelector('.bg-home').remove();
  }else if (document.querySelector('.bg-about')){
    console.log('about exist')
    document.querySelector('.bg-about').remove();
  }
  // if content exist dont add it
  if(!document.querySelector('.bg-menu')){
    mainCont.appendChild(menuPage())
  }
});

// about
const about = document.querySelector('.about');
about.addEventListener('click', () => {
  // remove menu if exist
  if(document.querySelector('.bg-menu')){
    document.querySelector('.bg-menu').remove();
    // remove home if exist
  }else if (document.querySelector('.bg-home')){
    document.querySelector('.bg-home').remove();
  }
  // if content exist dont add it
  
  if(!document.querySelector('.bg-about')){
    mainCont.appendChild(aboutPage())
  }
});
// Home elements
const home = document.querySelector('.homeIcon');
home.addEventListener('click', () => {
  // remove menu if exist
  if(document.querySelector('.bg-menu')){
    document.querySelector('.bg-menu').remove();
    // remove about if exist
  }else if (document.querySelector('.bg-about')){
    document.querySelector('.bg-about').remove();
  }
  // if content exist dont add it
  if(!document.querySelector('.bg-home')){
    mainCont.appendChild(homePage())
  }
});



