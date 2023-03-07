const aboutNav = document.querySelector('.about-side');
const memoryNav = document.querySelector('.memory-side');
const cvNav = document.querySelector('.cv-side');
const battleNav= document.querySelector('.battle-side');
const ticNav = document.querySelector('.tic-side');
const weatherNav = document.querySelector('.weather-side');
const contactNav = document.querySelector('.contact-side');

aboutNav.addEventListener('click', () => {
      // aboutNav.style.color = 'white';
      // aboutNav.style.backgroundColor = 'darkgreen';;
      // cvNav.style.color = '#696969';
      // cvNav.style.backgroundColor = '#1b1b1b';
      // battleNav.style.color = '#696969';
      // battleNav.style.backgroundColor = '#1b1b1b';
      // ticNav.style.color = '#696969';
      // ticNav.style.backgroundColor = '#1b1b1b';

    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
});

memoryNav.addEventListener('click', () => {
  window.scroll({
      top: 900,
      behavior: 'smooth'
    });
})

cvNav.addEventListener('click', () => {
    // cvNav.style.color = 'white';
    // cvNav.style.backgroundColor = 'darkgreen';
    // aboutNav.style.color = '#696969';
    // aboutNav.style.backgroundColor = '#1b1b1b';
    // battleNav.style.color = '#696969';
    // battleNav.style.backgroundColor = '#1b1b1b';
    // ticNav.style.color = '#696969';
    // ticNav.style.backgroundColor = '#1b1b1b';

    window.scroll({
      top: 1500,
        behavior: 'smooth'
      });
});

battleNav.addEventListener('click', () => {
    // battleNav.style.color = 'white';
    // battleNav.style.backgroundColor = 'darkgreen';
    // aboutNav.style.color = '#696969';
    // aboutNav.style.backgroundColor = '#1b1b1b';
    // cvNav.style.color = '#696969';
    // cvNav.style.backgroundColor = '#1b1b1b';
    // ticNav.style.color = '#696969';
    // ticNav.style.backgroundColor = '#1b1b1b';

    window.scroll({
        top: 2200,
        behavior: 'smooth'
      });
});

ticNav.addEventListener('click', () => {
    // ticNav.style.color = 'white';
    // ticNav.style.backgroundColor = 'darkgreen';
    // aboutNav.style.color = '#696969';
    // aboutNav.style.backgroundColor = '#1b1b1b';
    // battleNav.style.color = '#696969';
    // battleNav.style.backgroundColor = '#1b1b1b';
    // cvNav.style.color = '#696969';
    // cvNav.style.backgroundColor = '#1b1b1b';

    window.scroll({
        top: 2800,
        behavior: 'smooth'
      });
});

weatherNav.addEventListener('click', () => {
  window.scroll({
      top: 3300,
      behavior: 'smooth'
    });
})

contactNav.addEventListener('click', () => {
    window.scroll({
        top: 4000,
        behavior: 'smooth'
      });
})