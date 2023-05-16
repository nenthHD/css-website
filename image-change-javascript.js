var image1 = document.getElementById("wiki1");
var image2 = document.getElementById("wiki2");

function changeImage1() {
    image1.src = "css-website/kts-css.png";
    image1.removeEventListener("click", changeImage1);
}

function changeImage2() {
    image2.src = "css-website/kts-without-css.png";
    image2.removeEventListener("click", changeImage2);
}

image1.addEventListener("click", changeImage1);
image2.addEventListener("click", changeImage2)


