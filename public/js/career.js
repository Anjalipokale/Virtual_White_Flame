/* Apply Form Modal */

const modal = document.getElementById("jobModal");

const openButtons = document.querySelectorAll(".open-modal");

const closeButton = document.querySelector(".close-modal");

const positionField = document.getElementById("jobPosition");

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.classList.add("active");

        positionField.value =
        button.getAttribute("data-job");

    });

});

closeButton.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

/* Department Filter */

const filterButtons = document.querySelectorAll(".filter-btn");

const jobCards = document.querySelectorAll(".job-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filterValue =
        button.getAttribute("data-filter");

        jobCards.forEach(card => {

            const department =
            card.getAttribute("data-department");

            if(
                filterValue === "All" ||
                department === filterValue
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});


/* FAQ Accordion */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        answer.classList.toggle("show");

    });

});


