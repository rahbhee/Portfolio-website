const aboutDisplay = document.querySelector('.about');
const aboutBtn = document.querySelector('#about');
const introSection = document.querySelector('.intro');

aboutBtn.addEventListener("click", () => {
    introSection.style.display = 'none'
    aboutDisplay.style.display = 'block'
})

