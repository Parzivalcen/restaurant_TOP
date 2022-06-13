const home = () =>{
const bgHome = document.createElement('div');
bgHome.classList.add('bg-home');
const container = document.createElement('div');
container.classList.add('container', 'container--home');
container.innerHTML = `
<div class="hero">
<h1 class="title">Tata Rendygui</h1>
<button class="btn btn--order">Order now</button>
</div>
`
bgHome.appendChild(container);
return bgHome;
  }
export default home;