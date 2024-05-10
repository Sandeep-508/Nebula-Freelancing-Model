// for navbar

let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".max_lg_view");
let body = document.body;
let first_line = document.querySelector(".first_line")
let second_line = document.querySelector(".second_line")
let third_line = document.querySelector(".third_line")
let nav_link = document.querySelectorAll(".nav_link");

// we are going to use this function to make cross whenever the navmenu is clicked

function cross() {
    second_line.style.display = "none";
    first_line.style.transform = "rotate(45deg)";
    first_line.style.top = "15px";
    first_line.style.left = "1px";
    first_line.classList.add("position-relative");
    third_line.style.transform = "rotate(-45deg)";
    third_line.style.top = "-11px";
    third_line.classList.add("position-relative");
}

// we are going to use this function to remove the cross again when the menuicon is clicked

function remove_cross() {
    second_line.style.display = "block";
    first_line.style.transform = "rotate(0deg)";
    first_line.classList.remove("position-relative");
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("position-relative");
}

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    nav_link.forEach(other => {
        other.addEventListener("click", () => {
            lg_view.classList.remove("show");
            body.style.overflow = "auto";
            remove_cross();
        });
    });
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        cross();
    } else {
        body.style.overflow = "auto";
        remove_cross();
    }
});



// accordion

let accordion_item = document.querySelectorAll(".accoridon_items");
let svg_icon = document.querySelector(".svg_icon");
let disp_text = document.querySelector(".disp_text");
disp_text.style.display = "flex";
svg_icon.innerHTML = `<svg width="30" height="15" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2.5H8C8 2.5 8 2.5 7.9321 2.5C7.70711 2.5 8.26522 2.5 8 2.5C7.73478 2.5 7.70711 2.5 7.5 2.5C7 2.5 7 2.5 7 2.5H6H1C0.734784 2.5 0.48043 2.39464 0.292893 2.20711C0.105357 2.01957 0 1.76522 0 1.5C0 1.23478 0.105357 0.98043 0.292893 0.792893C0.48043 0.605357 0.734784 0.5 1 0.5H6H6.5C7 0.5 6.73478 0.503254 7 0.503254C7.26522 0.503254 6.5 0.503254 7 0.5C7 0.5 7.5 0.5 7.70711 0.5H8H13C13.2652 0.5 13.5196 0.605357 13.7071 0.792893C13.8946 0.98043 14 1.23478 14 1.5C14 1.76522 13.8946 2.01957 13.7071 2.20711C13.5196 2.39464 13.2652 2.5 13 2.5Z" fill="black"/>
</svg>`;

accordion_item.forEach(otherElement => {
    let svg_icon = otherElement.querySelector(".svg_icon");
    let disp_text = otherElement.querySelector(".disp_text");
    let clickBtn = otherElement.querySelector(".click_btn");
    clickBtn.addEventListener("click", () => {
        accordion_item.forEach(itm => {
            if (itm !== otherElement) {
                let svg_icon = itm.querySelector(".svg_icon");
                let disp_text = itm.querySelector(".disp_text");
                disp_text.style.display = "none";
                svg_icon.innerHTML = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.1667 17.3333H17.3333V28.1667C17.3333 28.7413 17.1051 29.2924 16.6987 29.6987C16.2924 30.1051 15.7413 30.3333 15.1667 30.3333C14.592 30.3333 14.0409 30.1051 13.6346 29.6987C13.2283 29.2924 13 28.7413 13 28.1667V17.3333H2.16667C1.59203 17.3333 1.04093 17.1051 0.634602 16.6987C0.228274 16.2924 0 15.7413 0 15.1667C0 14.592 0.228274 14.0409 0.634602 13.6346C1.04093 13.2283 1.59203 13 2.16667 13H13V2.16667C13 1.59203 13.2283 1.04093 13.6346 0.634601C14.0409 0.228273 14.592 0 15.1667 0C15.7413 0 16.2924 0.228273 16.6987 0.634601C17.1051 1.04093 17.3333 1.59203 17.3333 2.16667V13H28.1667C28.7413 13 29.2924 13.2283 29.6987 13.6346C30.1051 14.0409 30.3333 14.592 30.3333 15.1667C30.3333 15.7413 30.1051 16.2924 29.6987 16.6987C29.2924 17.1051 28.7413 17.3333 28.1667 17.3333Z"
                                        fill="black" />
                                </svg>`;
            }
        });
        let text_prop = window.getComputedStyle(disp_text).display;
        if (text_prop === "none") {
            disp_text.style.display = "flex";
            svg_icon.innerHTML = `<svg width="30" height="15" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2.5H8C8 2.5 8 2.5 7.9321 2.5C7.70711 2.5 8.26522 2.5 8 2.5C7.73478 2.5 7.70711 2.5 7.5 2.5C7 2.5 7 2.5 7 2.5H6H1C0.734784 2.5 0.48043 2.39464 0.292893 2.20711C0.105357 2.01957 0 1.76522 0 1.5C0 1.23478 0.105357 0.98043 0.292893 0.792893C0.48043 0.605357 0.734784 0.5 1 0.5H6H6.5C7 0.5 6.73478 0.503254 7 0.503254C7.26522 0.503254 6.5 0.503254 7 0.5C7 0.5 7.5 0.5 7.70711 0.5H8H13C13.2652 0.5 13.5196 0.605357 13.7071 0.792893C13.8946 0.98043 14 1.23478 14 1.5C14 1.76522 13.8946 2.01957 13.7071 2.20711C13.5196 2.39464 13.2652 2.5 13 2.5Z" fill="black"/>
</svg>`;
        } else {
            disp_text.style.display = "none";
            svg_icon.innerHTML = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.1667 17.3333H17.3333V28.1667C17.3333 28.7413 17.1051 29.2924 16.6987 29.6987C16.2924 30.1051 15.7413 30.3333 15.1667 30.3333C14.592 30.3333 14.0409 30.1051 13.6346 29.6987C13.2283 29.2924 13 28.7413 13 28.1667V17.3333H2.16667C1.59203 17.3333 1.04093 17.1051 0.634602 16.6987C0.228274 16.2924 0 15.7413 0 15.1667C0 14.592 0.228274 14.0409 0.634602 13.6346C1.04093 13.2283 1.59203 13 2.16667 13H13V2.16667C13 1.59203 13.2283 1.04093 13.6346 0.634601C14.0409 0.228273 14.592 0 15.1667 0C15.7413 0 16.2924 0.228273 16.6987 0.634601C17.1051 1.04093 17.3333 1.59203 17.3333 2.16667V13H28.1667C28.7413 13 29.2924 13.2283 29.6987 13.6346C30.1051 14.0409 30.3333 14.592 30.3333 15.1667C30.3333 15.7413 30.1051 16.2924 29.6987 16.6987C29.2924 17.1051 28.7413 17.3333 28.1667 17.3333Z"
                                        fill="black" />
                                </svg>`;
        }
    });

});

// // preloader

// let preloader = document.querySelector(".preloader");
// preloader.classList.add("top_100");
// setTimeout(() => {
//     preloader.classList.add("-top_100");
// }, 5000);


// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;

scroll_btn.classList.add("d-none");
window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// AOS Animation

AOS.init({
    once: true,
    duration: 1200,
});


// progress

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


// const num1 = [1, 3, 4, 5, 6];
// const num2 = [7, 8, 9, 0, 6];
// let numm = [...num1, ...num2]

// let ex = [1, 1, 3, 312, [32, 432, 42, [45, 5333, 534, 56], 532], 53425];
// let ex2 = ex.flat(Infinity);
// console.log(ex2);

// num1()

// let num1 = function () {
//     console.log("aman");
// }
// num2()

// function num2() {
//     console.log("sanddep")
// }