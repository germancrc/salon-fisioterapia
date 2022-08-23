//FIXED NAV

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
  })


// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//           "body").style.visibility = "hidden";
//         document.querySelector(
//           "#loader, #logoLoad").style.visibility = "visible";
//     } else {
//         document.querySelector(
//           "#loader, #logoLoad").style.display = "none";
//         document.querySelector(
//           "body").style.visibility = "visible";
//     }
// };


