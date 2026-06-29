// contact.js
console.log("Contact Page Loaded");

const openBtn = document.getElementById("openDealerModal");
const closeBtn = document.getElementById("closeDealerModal");
const modal = document.getElementById("dealerModal");

if(openBtn){

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.style.display = "none";
        }

    });

}
