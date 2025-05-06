// show another container image when screen under 501
function hideContainer() {
  const element = document.getElementById("remove-side");
  if (window.innerWidth <= 500) {
      element.classList.remove("side-container");
  } else {
      element.classList.add("side-container");
  }
}

hideContainer();
window.addEventListener('resize', hideContainer);

function picImage() {
  const imgElement = document.getElementById('hide');
  if (window.innerWidth < 501) {
    imgElement.style.display = '';
  } else {
    imgElement.style.display = 'none';
  }
}

picImage();
window.addEventListener('resize', picImage);