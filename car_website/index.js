let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".n");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Login Form
document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};

// Home Parallex

// document.querySelector(".home").onmousemove = (e) => {
//   document.querySelectorAll(".homeParallexEffect").forEach((el) => {
//     let Speed = el.getAttribute("data-speed");
//     let X = (window.innerWidth - e.pageX * Speed) / 60;
//     let Y = (window.innerHeight - e.pageY * Speed) / 60;

//     el.style.transform = `translateX(${Y}px) translateY(${X}px)`;
//   });
// };

// document.querySelector(".home").onmouseleave = (e) => {
//   document.querySelectorAll(".homeParallexEffect").forEach((el) => {
//     el.style.transform = `translateX(0px) translateY(0px)`;
//   });
// };

// Swiper JS For Vehicle Slider
var swiper = new Swiper(".VehiclesSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Swiper JS For Featured Slider
var swiper = new Swiper(".FeatureSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Swiper JS For Review Slider
var swiper = new Swiper(".ReviewSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((b) => {
  b.onclick = () => {
    let color = b.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
  

// form validation
function fun()
{
pat=/^_|^@|^\d/;
username = document.getElementById("t1").value;
email=document.getElementById("email_c").value
p_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//v==" " || u==" "
if( username.length==0)
{
alert("Name must not be blank !!!");
}
email=document.getElementById("email_n").value
p_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!p_email.test(email))
{
    alert("Entered email address is invalid!!!")
}

if(pat.test(username))
{
alert("Enter valid username");
}
}

function validation1()
{
    email=document.getElementById("email_n").value
    p_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!p_email.test(email))
    {
        alert("Entered email address is invalid!!!")
    }
}


// function login_validation()
// {
//   email='devesh145@gmail.com'
//   password='456@4789'
//   pat_pass=/\@+\d+/
//   p_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   email_login=document.getElementById("email_l").value
//   pass=document.getElementById("pass_l").value

//   if (email_login=''||pass=='')
//   {
//     alert("Both must not be blank!!!!")
//   }
//   if((!p_email.test(email_login)))
//   {
//     alert("Entered Email is invalid !!!!")
//   }
//   if(email_login!=email)
//   {
//     alert("Entered email address is wrong")
//   }
//   if (!pat_pass.test(pass))
//   {
//     alert("Password must contain one @ and one digit !!!")

//   }
//   if (pass!=password)
//   {
//     alert("Password not matched!!!")
//   }
  
// }