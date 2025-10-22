const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector (".arrow_left");
arrowLeft.addEventListener("click", function() {
	if (currentSlide > 0) {
	currentSlide--;
} else {currentSlide = slides.length - 1;
}
	bannerImage.src="./assets/images/slideshow/"+slides[currentSlide].image;
	bannerText.innerHTML=slides[currentSlide].tagLine;

	dots.forEach(function(dot) {
    dot.classList.remove("dot_selected");
	})
	dots[currentSlide].classList.add("dot_selected");
	console.log("Flèche gauche cliquée !");
	});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	if (currentSlide < slides.length - 1) {
    currentSlide++;
		} else {
    currentSlide = 0;
	}
	bannerImage.src="./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML=slides[currentSlide].tagLine;
	dots.forEach(function(dot) {
    dot.classList.remove("dot_selected");
	})
	dots[currentSlide].classList.add("dot_selected");
	console.log("Flèche droite cliquée !")
})

let currentSlide = 0;
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");