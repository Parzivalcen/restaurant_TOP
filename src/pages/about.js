const about = () => {
  const about = document.createElement('div')
  about.classList.add('container', 'container--about');
  about.innerHTML = `
  <h1>This is the About page</h1>`
  return about;
}
export default about;