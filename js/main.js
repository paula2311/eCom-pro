


/* btn scroll */
window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.pageYOffset > 320) {
        scrollButton.classList.remove('hide');
    } else {
        scrollButton.classList.add('hide');
    }
});

    document.getElementById('scrollButton').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
//////////////////////////////////////////////////////////
