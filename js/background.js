/* 
const images = ["img01.jpg", "img02.jpg", "img03.jpg"];

const no = Math.floor(Math.random()*3);
const currentImg = `img/${images[no]}`;
//document.body.style.backgroundImage = "src='img/img01.jpg'";

const image = document.createElement("img");
image.src = currentImg;
document.body.appendChild(image);

//body 태그에 들어갈 이미지 
//background-image: url('img/img01.jpg')
*/

//아래부터 재작성
const images = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"];
const no = Math.floor(Math.random()*images.length);
const currentImg = `img/${images[no]}`;

//index 기준이기 때문에...
document.body.style.backgroundImage = `url(${currentImg})`;
document.body.style.height = "100%";
document.body.style.backgroundSize = "cover";
