const selectedImage = document.getElementById('selectedImage');
const popup = document.getElementById('popup');

selectedImage.addEventListener('click', function() {
  popup.style.display = 'block';
});

popup.addEventListener('click', function() {
  popup.style.display = 'none';
});
