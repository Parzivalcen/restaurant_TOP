// Home elements
home = () =>{
  const body = document.body
  
  const container = document.createElement('div');
  container.classList.add('container', 'container--home');
  // NAV BAR //
  const navbar = document.createElement('div');
  navbar.classList.add('nav');
  container.append(navbar)



  body.append(container);
}

home();
