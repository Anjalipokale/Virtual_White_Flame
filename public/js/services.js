// service



document.addEventListener("DOMContentLoaded", function () {

  const toggles = document.querySelectorAll(".toggle-btn");

  toggles.forEach(btn => {
    const targetId = btn.getAttribute("href");
    const target = document.querySelector(targetId);

    // OPEN
    target.addEventListener("show.bs.collapse", function () {
      btn.innerText = "Show Less...";
    });

    // CLOSE
    target.addEventListener("hide.bs.collapse", function () {
      btn.innerText = "Show More...";
    });

  });

});