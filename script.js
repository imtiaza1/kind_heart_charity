// slider
// const sliders = document.querySelectorAll(".slider");
// const leftBtn = document.querySelector(".left-btn");
// const rightBtn = document.querySelector(".right-btn");

// let currentSlideIndex = 0; // Keeps track of the current slide index

// // Function to display the current slide and hide others
// function showSlide(index) {
// 	sliders.forEach((slider, i) => {
// 		if (i === index) {
// 			slider.style.opacity = "1";
// 			slider.style.display = "block";
// 			slider.style.transition = "opacity 0.5s";
// 		} else {
// 			slider.style.opacity = "0";
// 			slider.style.display = "none";
// 			slider.style.transition = "none";
// 		}
// 	});
// }

// // Initial display
// showSlide(currentSlideIndex);

const sliders = document.querySelectorAll(".slider");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentSlideIndex = 0; // Keeps track of the current slide index

// Function to display the current slide and hide others
function showSlide(index) {
	sliders.forEach((slider, i) => {
		if (i === index) {
			slider.style.opacity = "1";
			slider.style.display = "block";
			slider.style.transition = "opacity 1.5s all";
		} else {
			slider.style.opacity = "0";
			slider.style.display = "none";
			slider.style.transition = "opacity 1.5s all";
		}
	});
}

// Function to show the next slide
function showNextSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % sliders.length;
	showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);

// Automatically change slide every 1 second
setInterval(showNextSlide, 2000);

// Event listener for the left button
leftBtn.addEventListener("click", () => {
	currentSlideIndex = (currentSlideIndex - 1 + sliders.length) % sliders.length;
	showSlide(currentSlideIndex);
});

// Event listener for the right button
rightBtn.addEventListener("click", () => {
	currentSlideIndex = (currentSlideIndex + 1) % sliders.length;
	showSlide(currentSlideIndex);
});
// for nav section
let nav = document.getElementById("nav");
let menu = document.getElementById("menu");
let img = document.getElementById("img");
let img2 = document.getElementById("img2");

menu.addEventListener("click", function () {
	if (nav.style.height === "0vh") {
		nav.style.height = "52vh";
		img.style.height = "0px";
		img2.style.height = "30px";
	} else {
		nav.style.height = "0vh";
		img.style.height = "30px";
		img2.style.height = "0px";
	}
});
