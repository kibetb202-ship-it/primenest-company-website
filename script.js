"use strict";


/* =========================================================
   PRIMENEST INVESTMENT LIMITED
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   1. PAGE READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "PrimeNest Investment Limited website loaded successfully."
    );

});


/* =========================================================
   2. MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector("#main-navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.classList.toggle("active");

        navigation.classList.toggle(
            "nav-open",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* CLOSE MENU AFTER CLICKING A LINK */

    navigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                navigation.classList.remove(
                    "nav-open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });


    /* CLOSE MENU WITH ESCAPE */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navigation.classList.contains("nav-open")
        ) {

            menuToggle.classList.remove("active");

            navigation.classList.remove(
                "nav-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    });


    /* RESET MENU WHEN RETURNING TO DESKTOP */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            menuToggle.classList.remove("active");

            navigation.classList.remove(
                "nav-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =========================================================
   3. SMOOTH INTERNAL NAVIGATION
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================================================
   4. HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector("header");


if (header) {

    const updateHeader =
        () => {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.08)";

            } else {

                header.style.boxShadow =
                    "0 2px 15px rgba(0, 0, 0, 0.04)";

            }

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   5. AUTOMATIC COPYRIGHT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


const currentYear =
    new Date().getFullYear();


yearElements.forEach((element) => {

    element.textContent =
        currentYear;

});


/* =========================================================
   6. EXTERNAL LINKS SECURITY
========================================================= */

document
    .querySelectorAll('a[target="_blank"]')
    .forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


/* =========================================================
   7. IMAGE ERROR MONITORING
========================================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    `Image could not be loaded: ${image.src}`
                );

            }
        );

    });