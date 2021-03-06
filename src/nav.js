import hIcon from './images/homeIcon.svg';
const homeIcon = new Image ();
homeIcon.src = hIcon;
homeIcon.classList.add('homeIcon')
const nav = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('nav');
  navbar.innerHTML = `
  <div class="container container--nav">
    ${homeIcon.outerHTML}
    <div class="tabs">
      <h2 class="menu">Menu</h2>
      <h2 class="about">About</h2>
    </div>
  </div>`;
  return navbar;
}
export default nav;