document.addEventListener("DOMContentLoaded", function() {

    //slider

    const images = document.querySelectorAll('.slider .slider-line img');
    const sliderLine = document.querySelector('.slider .slider-line');
    let count = 0;
    let width;

    function init() {
        console.log('resize');
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector('.slider-next').addEventListener('click', function () {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider();
    });

    document.querySelector('.slider-prev').addEventListener('click', function () {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';

    }

    //language

    const select = document.getElementById('languageSelect');
        
        select.addEventListener('change', (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'uk') {
            window.location.href = 'about_the_library_uk.html'; // перенаправление на страницу на украинском языке
        } else if (selectedOption === 'en') {
            window.location.href = 'about_the_library_en.html'; // перенаправление на страницу на английском языке
        }
    });
    
});