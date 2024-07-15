// mobile navigation menu
const bar = document.querySelector(".bar");
const close = document.querySelector("#close");

const nav= document.querySelector(".mobile");


if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}

// active links

// const navLinks=document.querySelectorAll(".nav-links");
// // console.log(navLinks);

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         // Remove active class from all links
//         navLinks.forEach(navLink => navLink.classList.remove('active'));
//         // Add active class to the clicked link
//         link.classList.add('active');
//     });
// });
