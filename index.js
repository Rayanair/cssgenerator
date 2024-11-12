//POPINS
const popinButtons = document.querySelectorAll('.popin-btn');
const dismissButtons = document.querySelectorAll('.popin-dismiss');
const modals = document.querySelectorAll('.modal');
function displayPopin() {
  const target = this.getAttribute('data-target');
  const modal = document.querySelector(target);
  modal.style.display = 'block';
}
function dismissPopin() {
  const modal = this.closest('.modal');
  modal.style.display = 'none';
}
popinButtons.forEach(button => button.addEventListener('click', displayPopin));
dismissButtons.forEach(button => button.addEventListener('click', dismissPopin));
modals.forEach(modal => modal.addEventListener('click', dismissPopin));
// ONNGLETS

document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll(".tab-list li");
  const tabPanes = document.querySelectorAll(".tab-pane");

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function() {
      for (let j = 0; j < tabLinks.length; j++) {
        tabLinks[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
      this.classList.add("active");
      document.querySelector(this.getAttribute("data-target")).classList.add("active");
    });
  }
});

// INFOBULLE
const btuton = document.querySelector(".tooltip");
console.log(btuton.title);
console.log(btuton);
btuton.addEventListener('mouseover', () =>{
  const newDiv = document.createElement("div");
  newDiv.classList.add('tip');
  const newContent = document.createTextNode(btuton.title);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  btuton.addEventListener('mouseout', () =>{
    document.body.removeChild(newDiv)
  })
})






