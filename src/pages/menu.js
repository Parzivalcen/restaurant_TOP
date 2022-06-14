import margheritaImg from '../images/margherita.jpg';
import diavolaImg from '../images/Deavola.jpg';
import randomImg from '../images/random.jpg';
// margherita img
const ImgMargherita = new Image();
ImgMargherita.src = margheritaImg;
ImgMargherita.classList.add('card-img')

// Diavola img
const ImgDiavola = new Image();
ImgDiavola.src = diavolaImg;
ImgDiavola.classList.add('card-img')

//Random img
const ImgRandom = new Image();
ImgRandom.src = randomImg;
ImgRandom.classList.add('card-img')
const menu = () => {
  const menu = document.createElement('div')
  const bgMenu = document.createElement('div');
  bgMenu.classList.add('bg-menu');
  menu.classList.add('container', 'container--menu');
  menu.innerHTML = `
  <h1 class="title title--menu">Our Delicious Menu</h1>
  <div class="menu-grid">
  <!-- Cards -->
  <!-- SingleCard -->
  <div class="menu-card">
    ${ImgMargherita.outerHTML}
    <h3>Margherita</h3>
    <p>Classic Italian Masterpiece. Do you need any more info than that?</p>
    <button class="btn btn--menu">order now</button>
    </div>
    
    <!-- SingleCard -->
    <div class="menu-card">
    ${ImgDiavola.outerHTML}
    <h3>Deavola</h3>
    <p>Can you stand the spice?</p>
    <p>Delicious spicy fresh chillies sauce</p>
    <button class="btn btn--menu">order now</button>
    </div>
    
    <!-- SingleCard -->
    <div class="menu-card">
    ${ImgRandom.outerHTML}
    <h3>Feeling lucky?</h3>
    <p>We will randomly pick the flavors for you</p>
    <button class="btn btn--menu">order now</button>
  </div>
  
</div>`
  bgMenu.appendChild(menu);
  return bgMenu;
}
export default menu;