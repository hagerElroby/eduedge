let sidebar = document.getElementById("sidebar");
let menu = document.getElementById("menu");
let arrow = document.getElementById("arrow");
let one = document.getElementById("one");

menu.addEventListener("click" , function(){
  sidebar.classList.toggle('open')
})

arrow.addEventListener('click', function(){
 one.classList.toggle("hidden")
})