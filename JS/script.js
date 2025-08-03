let bar=document.querySelector(".bar") 
let logo=document.querySelector(".logo")
let menu=document.querySelector(".menu")
let Hedder=document.querySelector(".Hedder")

document.addEventListener("DOMContentLoaded", ()=>{
    if (window.innerWidth <= 640 ) {
        bar.classList.remove("hidden")
        Hedder.classList.remove("flex")
         menu.classList.add("hidden") 
         logo.classList.add("hidden")
    }
     else {
        bar.classList.add("hidden")
        menu.classList.remove("hidden")
    }
})
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
      menu.style.background="#f5f5f5"
      menu.style.padding="20px 0 20px 30px"
      menu.style.borderRadius="16px"
      
  } else {
    // Optional: Clear content if hidden
    menu.innerHTML = "";
  }
});
 