// show another container image when screen under 501
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