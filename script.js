

function check(){

    if(document.getElementById("Name").value.length>5 && document.getElementById("Email").value.length>5 && document.getElementById("Msj").value.length>5 ){
        sendMail()
    }
}


let year=document.getElementById("year")
let date=new Date()
let curtYear=date.getFullYear()
year.innerHTML=curtYear
    
    function sendMail() {
    var templateParams = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("Msj").value
    }
    const serviceID = "service_1pucuwk";
    const templateID = "template_2b0ihsh";
    const public_key = "dxU5hmoz-j9YOAKrn";
    emailjs.send(serviceID, templateID, templateParams, public_key)
        .then(
            res => {
                document.getElementById("Name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Subject").value = "";
                document.getElementById("Msj").value = "";
                console.log(res);
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Your message had sent',
                    showConfirmButton: true,
                    timer: 10000
                })
            }
        )
        .catch((err) => console.log(err));
}

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});