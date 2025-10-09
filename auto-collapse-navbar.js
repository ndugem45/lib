document.addEventListener('DOMContentLoaded', ()=>{
    let lastScrollTop = 0;
    let navbar = document.querySelector("[data-el='navbar']");
    let threshold = navbar.getAttribute('data-el-thresshold') ?? 100;

    navbar.style.transition = 'all 200ms ease';
    
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
