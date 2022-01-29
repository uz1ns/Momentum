const images = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"];
const no = Math.floor(Math.random()*images.length);
const currentImg = `img/${images[no]}`;

document.body.style.backgroundImage = `url(${currentImg})`;
document.body.style.height = "100%";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat ="no-repeat";
