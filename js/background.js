const imges = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "5.jpg",
];

const random = imges[Math.floor(Math.random() * imges.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${random}`;

bgimg.classList.add("imgClass");

document.body.appendChild(bgimg);
