let bar=document.querySelector(".bar") 
let logo=document.querySelector(".logo")
let menu=document.querySelector(".menu")
let Hedder=document.querySelector(".Hedder")

function responsivemanu(){
  if (window.innerWidth <= 640 && bar.classList.contains("block") ) {

        Hedder.classList.remove("flex")
       bar.style.position="relative"
       menu.style.position="absolute"
      

    }
     else {
        bar.classList.add("hidden")
           menu.classList.remove("hidden")

    }
}
// Run once when page loads
document.addEventListener("DOMContentLoaded", responsivemanu)

// // Run whenever the window is resized
window.addEventListener("resize",responsivemanu)

// Toggle menu on bar click
bar.addEventListener("click",()=>{
 // Toggle the "hidden" class on the menu
  menu.classList.toggle("hidden");

  // If menu is being shown, inject HTML
  if (!menu.classList.contains("hidden")) {
    menu.innerHTML = `
      <ul class=" font-display-open text-Dark02 font-normal">
        <li><a href="#" class="text-xl pb-6">Portfolio</a></li>
        <li><a href="#" class="text-xl py-6">Blog</a></li>
        <li class="mt-6">
          <a
            href="#"
            class="py-[13px] px-7 text-xl bg-[#FD6E0A] rounded-[5px] text-white lg:text-xl font-bold"
          >Hire Me</a>
        </li>
      </ul>`;
      menu.style.background="transparent"
      menu.style.padding="20px 0 20px 30px"
      menu.style.borderRadius="16px"
       menu.style.top="120px"
       menu.style.width="230px"
      
  } else {
    // Optional: Clear content if hidden
  
    menu.innerHTML = "";
  }
});
 