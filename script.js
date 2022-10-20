// console.log("script running........a")
// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector('.ham').style.display = 'inline';
//         document.querySelector('.cross').style.display = 'none';
//     }
//     else{
//         document.querySelector('.ham').style.display = 'none';
//         setTimeout(() => {
//             document.querySelector('.cross').style.display = 'inline';
//         }, 500);  
//     }
// })

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  