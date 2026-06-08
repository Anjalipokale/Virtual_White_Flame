 var NAV_ITEMS = [
    { label:'Home',               icon:'fa-home',           cat:'Main' },
    { label:'About Us',           icon:'fa-building',       cat:'About' },
    { label:'Company History',    icon:'fa-landmark',       cat:'About' },
    { label:'Vision & Mission',   icon:'fa-eye',            cat:'About' },
    { label:'Founders',           icon:'fa-star',           cat:'About' },
    { label:'Team',               icon:'fa-users',          cat:'About' },
    { label:'Presence',           icon:'fa-map-marker-alt', cat:'About' },
    { label:'Biomass Supply Management',                            icon:'fa-seedling', cat:'Services' },
    { label:'Biomass Briquettes & Pellets Manufacture',             icon:'fa-fire',     cat:'Services' },
    { label:'Build Own Operate & Transfer for Boiler & Co-Generation Plant', icon:'fa-cog', cat:'Services' },
    { label:'Operation and Management',                             icon:'fa-tools',    cat:'Services' },
    { label:'Products',   icon:'fa-box',       cat:'Main' },
    { label:'Plants',     icon:'fa-leaf',      cat:'Main' },
    { label:'Videos',     icon:'fa-video',     cat:'Gallery' },
    { label:'Images',     icon:'fa-images',    cat:'Gallery' },
    { label:'Albums',     icon:'fa-folder',    cat:'Gallery' },
    { label:'Career',     icon:'fa-briefcase', cat:'Main' },
    { label:'Contact Us', icon:'fa-envelope',  cat:'Main' }
  ];

  var overlay = document.getElementById('searchOverlay');
  var input   = document.getElementById('searchInput');
  var results = document.getElementById('searchResults');

  function openSearch() {
    overlay.classList.add('open');
    setTimeout(function(){ input.focus(); }, 80);
    render('');
  }
  function closeSearch() {
    overlay.classList.remove('open');
    input.value = '';
    render('');
  }
  function render(q) {
    q = q.trim().toLowerCase();
    var list = q === '' ? NAV_ITEMS : NAV_ITEMS.filter(function(x){ return x.label.toLowerCase().indexOf(q) !== -1; });
    if (!list.length) {
      results.innerHTML = '<div class="sb-empty"><i class="fa fa-search" style="font-size:22px;color:#ddd;display:block;margin:0 auto 8px"></i>No results found</div>';
      return;
    }
    results.innerHTML = list.map(function(item){
      return '<a href="#" class="sb-item" onclick="closeSearch();return false;">'
        + '<span class="sb-iico"><i class="fa ' + item.icon + '"></i></span>'
        + item.label
        + '<span class="sb-cat">' + item.cat + '</span>'
        + '</a>';
    }).join('');
  }

  document.getElementById('searchBtn').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  input.addEventListener('input', function(){ render(this.value); });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeSearch(); });


  // gallery

  function filterGallery(category) {

    let items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {

        if (category === "all") {
            item.style.display = "block";
        }
        else if (item.classList.contains(category)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }

    });

}


function filterGallery1(category){

    let items = document.querySelectorAll(".videos-item");

    items.forEach(item => {

        if(category === "all"){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });

}


let images = [];
let currentIndex = 0;

// wait for page load
window.onload = function () {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        let img = item.querySelector("img");
        images.push(img.src);

        item.addEventListener("click", () => {
            openLightbox(images.indexOf(img.src));
        });
    });
};

// OPEN LIGHTBOX
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

// CLOSE
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// NEXT / PREV
function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.getElementById("lightbox-img").src = images[currentIndex];
}

// popup product inquiry

function openInquiry(productName) {
    document.getElementById("inquiryModal").style.display = "block";
    document.getElementById("productName").value = productName;
}

function closeInquiry() {
    document.getElementById("inquiryModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("inquiryModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// about page js

var NAV_ITEMS = [
    { label:'Home',               icon:'fa-home',           cat:'Main' },
    { label:'About Us',           icon:'fa-building',       cat:'About' },
    { label:'Company History',    icon:'fa-landmark',       cat:'About' },
    { label:'Vision & Mission',   icon:'fa-eye',            cat:'About' },
    { label:'Founders',           icon:'fa-star',           cat:'About' },
    { label:'Team',               icon:'fa-users',          cat:'About' },
    { label:'Presence',           icon:'fa-map-marker-alt', cat:'About' },
    { label:'Biomass Supply Management',                            icon:'fa-seedling', cat:'Services' },
    { label:'Biomass Briquettes & Pellets Manufacture',             icon:'fa-fire',     cat:'Services' },
    { label:'Build Own Operate & Transfer for Boiler & Co-Generation Plant', icon:'fa-cog', cat:'Services' },
    { label:'Operation and Management',                             icon:'fa-tools',    cat:'Services' },
    { label:'Products',   icon:'fa-box',       cat:'Main' },
    { label:'Plants',     icon:'fa-leaf',      cat:'Main' },
    { label:'Videos',     icon:'fa-video',     cat:'Gallery' },
    { label:'Images',     icon:'fa-images',    cat:'Gallery' },
    { label:'Albums',     icon:'fa-folder',    cat:'Gallery' },
    { label:'Career',     icon:'fa-briefcase', cat:'Main' },
    { label:'Contact Us', icon:'fa-envelope',  cat:'Main' }
  ];

  var overlay = document.getElementById('searchOverlay');
  var input   = document.getElementById('searchInput');
  var results = document.getElementById('searchResults');

  function openSearch() {
    overlay.classList.add('open');
    setTimeout(function(){ input.focus(); }, 80);
    render('');
  }
  function closeSearch() {
    overlay.classList.remove('open');
    input.value = '';
    render('');
  }
  function render(q) {
    q = q.trim().toLowerCase();
    var list = q === '' ? NAV_ITEMS : NAV_ITEMS.filter(function(x){ return x.label.toLowerCase().indexOf(q) !== -1; });
    if (!list.length) {
      results.innerHTML = '<div class="sb-empty"><i class="fa fa-search" style="font-size:22px;color:#ddd;display:block;margin:0 auto 8px"></i>No results found</div>';
      return;
    }
    results.innerHTML = list.map(function(item){
      return '<a href="#" class="sb-item" onclick="closeSearch();return false;">'
        + '<span class="sb-iico"><i class="fa ' + item.icon + '"></i></span>'
        + item.label
        + '<span class="sb-cat">' + item.cat + '</span>'
        + '</a>';
    }).join('');
  }

  document.getElementById('searchBtn').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  input.addEventListener('input', function(){ render(this.value); });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeSearch(); });



  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        const dropdown = link.nextElementSibling;
        if (dropdown && (dropdown.classList.contains('dropdown') || dropdown.classList.contains('mega-dropdown'))) {
          e.preventDefault(); 
          dropdown.classList.toggle('open');
          
          
          const arrow = link.querySelector('.arrow');
          if (arrow) {
            arrow.style.transform = dropdown.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
          }
        }
      }
    });
  });

   /* =========================
   COUNTER ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute("data-target"));
        let current = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            current += increment;

            if (current < target) {
                counter.innerText = current;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

});





window.addEventListener("load", function () {

  let index = 0;
  const slider = document.getElementById("slider");
  const cards = document.querySelectorAll(".testimonial-card");

  function showSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index++;

    if (index >= cards.length) {
      index = 0;
    }

    showSlide();
  }

  showSlide(); // initial

  setInterval(nextSlide, 2500);

});


// service

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(btn => {

    const targetId = btn.getAttribute("href");
    const target = document.querySelector(targetId);

    target.addEventListener("show.bs.collapse", function () {
      btn.innerText = "Show Less";
    });

    target.addEventListener("hide.bs.collapse", function () {
      btn.innerText = "Show More...";
    });

  });

});