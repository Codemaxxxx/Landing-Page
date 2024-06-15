const fragment = document.createDocumentFragment();
const navBar = document.getElementById('nav-list-id');
const items = ['Home', 'Community', 'Blog', 'Contact'];

/* Populating the Navbar */

items.forEach((item, i) => {
  const links = document.createElement('a');
  links.classList.add('nav-link', 'hover-underline',);
  links.href = `#${items[i].toLowerCase()}`

  const span = document.createElement('span');
  span.classList.add('span');
  span.innerText = item;


  const li = document.createElement('li');
  li.classList.add('nav-item');
  
  links.appendChild(span);
  li.appendChild(links);
  navBar.appendChild(li);
});

document.querySelector('#nav-list-id').appendChild(fragment);


/* adding event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback, ) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/* Toggle the Navbar */

const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
const navList = document.querySelector('.navbar-list');

const toggleNav = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');  
};

addEventOnElements(navToggler, 'click', toggleNav);

navList.addEventListener('click', function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active'); 
});


/* To make Section Active */
window.onscroll = function () {
  document.querySelectorAll('section').forEach(function (active) {
    if(
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add('active');
    } else {
      active.classList.remove('active');
    }
  })
}





/* Hide Header and Back to Top Btn */

const header = document.querySelector('[data-header]');
const backToTop = document.querySelector('[data-back-to-top-btn]');

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;

  if(isScrollBottom) {
    setTimeout(function() {
      header.classList.add('hide');

    }, 7000)
  } else {
    header.classList.remove('hide');
  }

  lastScrollPos = window.scrollY
}

window.addEventListener('scroll', function () {
  if(window.scrollY >= 50) {
    header.classList.add('active');
    backToTop.classList.add('active');
    hideHeader();
  } else {
    header.classList.remove('active');
    backToTop.classList.remove('active');
  }
})


/* To Highlight the Nav when Viewed */

// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('.section');
//   const navLinks = document.querySelectorAll('.nav-link');

//   let current = '';
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYoffset >= (sectionTop - sectionHeight / 3)) {
//       current = section.getAttribute('id');
//     }
//   });
//   navLinks.forEach((link) => {
//     link.classList.remove('active');
//     if (link.href.includes(current)) {
//       link.classList.add('active');
//     }
//   });
// });

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
      });
    };
  });
};




