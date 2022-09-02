window.onload = function() {
    // alert("Loaded");
    window.addEventListener('scroll', function(e) {
        // console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    });
}