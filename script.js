/* =========================================
   APEX UNIVERSITY
   JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            this.parentElement;

        const currentAnswer =
            currentItem.querySelector(".faq-answer");


        /* Close other FAQs */

        document.querySelectorAll(".faq-item")
            .forEach(function (item) {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    item.querySelector(".faq-answer")
                        .style.maxHeight = null;

                }

            });


        /* Toggle current FAQ */

        currentItem.classList.toggle("active");


        if (currentItem.classList.contains("active")) {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

        } else {

            currentAnswer.style.maxHeight = null;

        }

    });

});


/* =========================================
   ANIMATED STATISTICS
========================================= */

const counters =
    document.querySelectorAll(".stat h2");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    counterStarted = true;


    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        let current = 0;

        const increment =
            target / 60;


        function updateCounter() {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target;

            }

        }


        updateCounter();

    });

}


/* Start counters when stats enter viewport */

const statsSection =
    document.querySelector(".stats-section");


const counterObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        },
        {
            threshold: 0.3
        }
    );


counterObserver.observe(statsSection);


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll(
        ".section, .vision-section, .ai-section, .research-section, .admission-section"
    );


sections.forEach(function (section) {

    section.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(function (section) {

    revealObserver.observe(section);

});


/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.10)";

    } else {

        navbar.style.boxShadow =
            "0 2px 20px rgba(0,0,0,0.06)";

    }

});