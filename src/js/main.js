const navSlide = () => {
    const phone = document.querySelector('.phone');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
    
    phone.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //phone animation
         phone.classList.toggle('toggle');
    });
    
    
}
navSlide();