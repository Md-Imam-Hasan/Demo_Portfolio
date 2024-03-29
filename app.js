const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav_list ul');
const menu_item = document.querySelectorAll('.nav_list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    if(scroll_position > 120){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});