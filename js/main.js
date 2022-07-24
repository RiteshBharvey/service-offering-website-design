window.addEventListener("load", () => {

    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
        // animate on scroll 
        AOS.init();
    }, 600)

})

// header bg reveal

const headerBg = () => {
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            header.classList.add("bg-reveal");
        } else {
            header.classList.remove("bg-reveal");
        }
    })
}
headerBg();

// nav

const navigation = () => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = document.querySelectorAll("li");

    const navToggle = () => {
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
    }

    navToggler.addEventListener("click", navToggle)

    navItems.forEach((Li) => {
        let anchorLi = Li.querySelector("a");
        if (anchorLi !== null) {
            anchorLi.addEventListener("click", () => {
                if (window.innerWidth <= 767) {
                    navToggle();
                }
            })
        }

    })
}
navigation()