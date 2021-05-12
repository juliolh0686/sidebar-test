let closeButton = document.querySelector('.button-close');
let menuButton = document.querySelector('.button-menu');
let sidebar = document.querySelector('.sidebar');

function toggleSideBar(){
    sidebar.classList.toggle('sidebar--active');
}

closeButton.addEventListener('click',toggleSideBar);

menuButton.addEventListener('click',toggleSideBar);

