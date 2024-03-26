const themeCheckbox = document.getElementById('themeCheckbox');
const header = document.getElementById('header');

themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        header.style.backgroundColor = 'blue'; // チェックされている場合の背景色
    } else {
        header.style.backgroundColor = '#333'; // チェックされていない場合の背景色
    }
});
