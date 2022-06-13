const menu = () => {
  const menu = document.createElement('div')
  menu.classList.add('container', 'container--menu');
  menu.innerHTML = `
  <h1>This is the Menu page</h1>`
  return menu;
}
export default menu;