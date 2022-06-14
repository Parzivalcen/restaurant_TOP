// About img
import aboutImg from '../images/about.jpg';
const AboutImg = new Image();
AboutImg.src = aboutImg;
// Social Icons
import twIcon from '../images/twitter.svg';
const IconTw = new Image();
IconTw.src = twIcon;

import igIcon from '../images/insta.svg';
const IconIg = new Image();
IconIg.src = igIcon;
const about = () => {
  const about = document.createElement('div');
  const bgAbout = document.createElement('div');
  bgAbout.classList.add('bg-about')
  about.classList.add('container', 'container--about');
  about.innerHTML = `
  <div class="about-text">
    <h1>About Us</h1>
    <p>We are proud to say that we make the best pizza of the region</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae molestias suscipit repellendus tempore. Ex totam mollitia nam molestiae eaque aliquid eligendi reiciendis, quasi eius.</p>
  </div>
  <div class="about-img">
    ${AboutImg.outerHTML}
    </div>
    
    <div class="socials">
    <i>
    ${IconTw.outerHTML}
    </i>
    <i>
    ${IconIg.outerHTML}
    </i>
  </div>`
  bgAbout.appendChild(about);
  return bgAbout;
}
export default about;