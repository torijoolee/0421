(() => {
  const navBtn = document.querySelector(".nav-btn");
  const header = document.querySelector(" .header");

  function handleNav() {
    console.log("clicked");
    header.classList.toggle("Active");
  }
  navBtn.addEventListener("click", handleNav);

  window.addEventListener("resize", function () {
    header.classList.remove("Active");
  });
})();
