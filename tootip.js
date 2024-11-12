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
// $(document).ready(function(){
//    const a = document.querySelector(".tooltip")
//     console.log(a)
//   });
