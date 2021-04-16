
//menu toggle
const btnActive = document.getElementById('btn-menu-active');
const menu = document.getElementById('menu-active');
const navbar = document.getElementById('navbar');

btnActive.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //scroll down
        navbar.classList.remove('bg-gray-900')
        navbar.classList.add('bg-white')
        navbar.classList.add('text-gray-800')
        navbar.classList.add('shadow')
        btnActive.classList.remove('text-gray-100')
        btnActive.classList.add('text-gray-900')
        
    } else {
        navbar.classList.add('bg-gray-900')
        navbar.classList.remove('bg-white')
        navbar.classList.remove('text-gray-800')
        navbar.classList.remove('shadow')
        btnActive.classList.remove('text-gray-900')
        btnActive.classList.add('text-gray-100')
    }   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//slider
        const slider1 = document.getElementById('slider1');
        const slider2 = document.getElementById('slider2');
        const left1 = document.getElementById('left1');
        const right1 = document.getElementById('right1');

        right1.addEventListener('click', () => {
            console.log('click');
            slider1.classList.add('hidden');
            slider2.classList.remove('hidden');
            // slider2.classList.add('tranform');
            // slider2.classList.add('translate-x-full');
        })
        left1.addEventListener('click', () => {
            console.log('click');
            slider1.classList.remove('hidden');
            slider2.classList.add('hidden');
        });

const btnSwitch = document.querySelectorAll('.switch')[0];
const btnSwitch1 = document.querySelectorAll('.switch')[1];

btnSwitch.addEventListener('click', () => {
    console.log('click');
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});
btnSwitch1.addEventListener('click', () => {
    console.log('click');
	document.body.classList.toggle('dark');
	btnSwitch1.classList.toggle('active');
});