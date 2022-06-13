const home = () =>{
  const container = document.createElement('div');
container.classList.add('container', 'container--home');
container.innerHTML = `
<div class="hero">
  <h1>Brasas Pizzeria</h1>
  <button>Order now</button>
</div>
`
return container;
  }
export default home;