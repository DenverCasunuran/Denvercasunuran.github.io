const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

        //Toggle Nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        //Animate Links
          navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.stlye.animation = '';
            } 
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`
            }
        });
        //Burger Animmation
        burger.classList.toggle('bano');
    });
        
}

navSlide();