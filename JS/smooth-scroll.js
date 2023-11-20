document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Add smooth scrolling behavior
                });
            }
        });
    });
});
