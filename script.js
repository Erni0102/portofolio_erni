window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.fade-in');
    for (var i = 0; i < sections.length; i++) {
        var sectionPosition = sections[i].getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            sections[i].classList.add('show');
        }
    }
});
