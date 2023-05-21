function check() {
  if (
    document.getElementById("Name").value.length > 2 &&
    document.getElementById("Email").value.length > 5 &&
    document.getElementById("Msj").value.length > 5
  ) {
    sendMail();
  }
}

let year = document.getElementById("year");
let date = new Date();
let curtYear = date.getFullYear();
year.innerHTML = curtYear;

function sendMail() {
  var templateParams = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    subject: document.getElementById("Subject").value,
    message: document.getElementById("Msj").value,
  };
  const serviceID = "service_1pucuwk";
  const templateID = "template_2b0ihsh";
  const public_key = "dxU5hmoz-j9YOAKrn";
  emailjs
    .send(serviceID, templateID, templateParams, public_key)
    .then((res) => {
      document.getElementById("Name").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("Subject").value = "";
      document.getElementById("Msj").value = "";
      console.log(res);
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Your message had sent",
        showConfirmButton: true,
        timer: 3000,
      });
    })
    .catch((err) => console.log(err));
}

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Fullstack Developer",
      "Community Champion",
      "Freelancer",
      "Mentor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Fullstack Developer",
      "Community Champion",
      "Freelancer",
      "Mentor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//download cv function
function downloadCV() {
  const link = document.createElement("a");
  link.href = "AlexKemboiResume120423.pdf";
  link.download = "AlexKemboiResume120423.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//get repos from github
function getUserRepos() {
  const repos = fetch(`https://api.github.com/users/alexkemboi/repos`);
  console.log(repos);
  return repos;
}

getUserRepos();

var request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/alexkemboi/repos", true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  var statusHTML = "";
  $.each(data, function (i, status) {
    if (status.description) {
      statusHTML += `<div class="col-md-4" >
                          <div class="card">
                              <div class="class-header">
                                <img src="./images/portfolio2.jpg" class="card-img-top" alt="...">
                                <h3 class="card-title text-sm text-light">${
                                  status.name.charAt(0).toUpperCase() +
                                  status.name.slice(1)
                                }</h3>
                              </div>
                            <div class="card-body">
                                <p class="card-text text-sm text-light">Description:${
                                  status.description
                                }</p>                                
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                  <div class="col-12">
                                      <button class="btn btn-block btn-success text-white">
                                          Visit Site
                                      </button>
                                  </div>
                                </div>
                            </div>
                        </div>        
                    </div>`;
    }
  });
  $(".repositories").html(statusHTML);
};

request.send();
