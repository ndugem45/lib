document.addEventListener('DOMContentLoaded', ()=>{
    let lastScrollTop = 0;
    let navbar = document.querySelector("[data-el='navbar']");
    let btnNav = document.querySelector(".w-nav-button");
    let threshold = navbar.getAttribute('data-el-thresshold') ?? 100;

    navbar.style.transition = 'all 200ms ease';

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'aria-expanded') {
                btnNav.classList.add('show');
                setTimeout(() => navbar.classList.remove('show'), 300);
            }
        });
    });

  observer.observe(btnNav, { attributes: true, attributeFilter: ['aria-expanded'] });
    
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if(currentScroll > threshold){
            navbar.classList.add('show');
        }else{
            navbar.classList.remove('show');
        }
    
        if (Math.abs(currentScroll - lastScrollTop) > threshold) {
            if (currentScroll > lastScrollTop) {
                if(document.querySelector('.w-nav-button').getAttribute('aria-expanded').toLowerCase() == 'false'){
                    navbar.classList.add('hidden') ;   
                }
            } else {
                navbar.classList.remove('hidden');
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    });
}, false);
