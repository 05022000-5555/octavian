document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const color = document.querySelector(".color")
  if (!menuOpen || !menu) return;
  menuOpen.addEventListener("click", function () {
    menu.classList.add("is-active");
  });
  window.addEventListener("scroll", (e)=>{
    const scroll = window.pageYOffset
    console.log(scroll)
    const heightReal = document.documentElement.scrollHeight- document.documentElement.clientHeight
    const width = scroll / heightReal * 100
    color.style.width = `${width}%`
})
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      menu.classList.remove("is-active");
    }
  });
});

