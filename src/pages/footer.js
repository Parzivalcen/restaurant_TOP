// Social Icons
import mapIcon from '../images/LOCATION.svg';
const IconMaps = new Image();
IconMaps.src = mapIcon;
IconMaps.classList.add('maps-icon')

import igIcon from '../images/insta.svg';
const IconIg = new Image();
IconIg.src = igIcon;
IconIg.classList.add('ig-icon')


const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer', 'bg-black');
  footer.innerHTML = `
  <div class="container container--footer">
  <div class="socials">
    <p>Follow Us</p>
    <i>${IconIg.outerHTML}</i>
  </div>
  <div class="location">
    <p>San Pedro - California</p>
    <i>${IconMaps.outerHTML}</i>
  </div>
  <div class="made">
    <p>made by <a target="_blank" href="https://github.com/Parzivalcen">DavidCentz</a></p>
  </div>
  </div>`;
  return footer;
}
export default footer;