/******************************************
/* Onload Center in title
/*******************************************/

// insure that all menu info and main logo in view on first load
window.addEventListener("load", _ => {
    
    if(!sessionStorage.getItem("visited")){
        document.getElementById("title-card").scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
        sessionStorage.setItem("visited", true)

    }
})


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
