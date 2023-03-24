let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".n");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

// Login Form
document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};

function fun()
{
  alert("hii")
pat=/^_|^@|^\d/;
username = document.getElementById("t1").value;
email=document.getElementById("email_c").value
p_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//v==" " || u==" "
if( username.length==0)
{
alert("Name must not be blank !!!");
}

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
