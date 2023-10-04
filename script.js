const nav = document.querySelector('.btn-mobile-nav');

nav.addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('nav-open');
    nav.blur()
})

function closeMobileNav() {
    document.querySelector('.header').classList.remove('nav-open');
}


const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => link.addEventListener('click', function(e) {
    e.preventDefault()
    const href = link.getAttribute('href');
    if(href === '#') {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        link.blur()
    }else {
        document.querySelector(href).scrollIntoView({behavior: "smooth"});
        link.blur();
        if(link.classList.contains('main-nav-link')){
            closeMobileNav();
        }
    }
})) 


const sectionHeroEl = document.querySelector('.section-hero')

const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if(!ent.isIntersecting) {
        document.body.classList.add('sticky');
        
    }

    if(ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }
},
 {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
})

observer.observe(sectionHeroEl)


//////////////////////////////////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions


function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();