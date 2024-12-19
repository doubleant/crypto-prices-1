let menu = document.querySelector('#nav-menu')

menu.addEventListener('click', (event) => {
  let target = event.target
  
  switch(target.id){
    case "menu-one":
      console.log('menu one was clicked!');
      break;
    case "menu-two":
      console.log('menu-two was pressed!');
      break;
  }
    
})