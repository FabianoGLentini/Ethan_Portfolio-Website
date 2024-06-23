


/******************************************
/* Nav Bar Toggle
/*******************************************/

const primaryNav = document.querySelector(".nav-body")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible" , true)  
        navToggle.setAttribute("aria-expanded", true)
      }else{
        primaryNav.setAttribute("data-visible" , false)  
        navToggle.setAttribute("aria-expanded", false)
      }

})

// Toggle nav menu bar off when click a link or outside menu bar

document.addEventListener("click", e => {
  if(!navToggle.contains(e.target)) {
    primaryNav.setAttribute("data-visible" , false)  
    navToggle.setAttribute("aria-expanded", false)
  }
})



/******************************************
/* PARALLAX
/*******************************************/

// const parallax = document.getElementById("parallax") 


// window.addEventListener("scroll", paralaxScroll)

// function paralaxScroll(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 +"px"
// }


/******************************************
/* EMAIL COPY
/*******************************************/
