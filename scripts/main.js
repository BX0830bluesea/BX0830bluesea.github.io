const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/age2.png") {
    myImage.setAttribute("src", "images/icon.jpg");
  } else {
    myImage.setAttribute("src", "images/age2.png");
  }
};

