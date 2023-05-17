/* Created by Tivotal */

let forms = document.querySelector(".forms");
let passIcon = document.querySelectorAll(".eye-icon");
let links = document.querySelectorAll(".link");

passIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    let passwordInputs = icon.parentElement.querySelectorAll(".password");

    passwordInputs.forEach((input) => {
      //if the input type is password, making it to text
      //and changin icon
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
        return;
      }

      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    });
  });
});

links.forEach((link) => {
  //toggling between login & signup forms
  link.addEventListener("click", (e) => {
    //preventing form to submit
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
