window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll",  () =>{
        const navbar = this.document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 0);
    });
    window.addEventListener("scroll", () => {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let revealTop = reveals[i].getBoundingClientRect().top;
          let revealPoint = 50;
    
          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
          else{
              reveals[i].classList.remove("active");
          }
        }
      });
});

let personBio = document.querySelectorAll('.person-bio')
let bio = document.querySelectorAll('.bio')
let x = document.querySelectorAll('.bio-x')
for(let i = 0; i<personBio.length;i++){
    personBio[i].onclick = ()=>{
        for(let j= 0;j<bio.length; j++){
            if (i==j) {
                bio[j].classList.toggle('bio-onclick')
            }
        }
    }
    x[i].onclick = ()=>{
        bio[i].classList.toggle('bio-onclick')
    }
}
const angleUp = document.querySelector("#up");
angleUp.addEventListener('click' , ()=>{
    document.window.scrollY = 0;
})
window.addEventListener('scroll', ()=>{
    angleUp.classList.toggle('angle-up-show', window.scrollY > 500)
})

let buyButton = document.querySelectorAll(".buy")
let modal = document.querySelector('.modal');
for(let i =  0; i<buyButton.length;i++){
    buyButton[i].addEventListener("click", ()=>{
        modal.classList.add('modal1');
    })
}
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const alert = document.querySelector(".alert");

btn5.addEventListener("click", () => {
    if(!input1.value==""){
      modal.classList.remove("modal1");
    }
    else{
      input1.style.border = "1px dashed red";
      input2.style.border = "1px dashed red";
      input3.style.border = "1px dashed red";
      alert.style.display="block"
    }
  });
   btn6.addEventListener("click", () => {
      alert.style.display = "none";
      input1.style.border = "1px solid white";
      input2.style.border = "1px solid white";
      input3.style.border = "1px solid white";
   });