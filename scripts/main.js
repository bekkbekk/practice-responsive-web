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
}