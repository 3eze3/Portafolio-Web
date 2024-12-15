export function slide() {
    const prev_btn = document.querySelector('.live__btn-prev');
    const next_btn = document.querySelector('.live__btn-next');
    const containerSlide = document.querySelector('.live__container');
    const slides = document.querySelectorAll('.live__card');
    const totalSlides = slides.length;
    let index = 0;
    const updateSlide = () => {
        if (index >= totalSlides) {
            index = 0;
        }
        if (index < 0) {
            index = totalSlides - 1;
        }
        containerSlide.style.transform = `translateX(-${index * 100}%)`;
    };
    const handlePrevClick = () => {
        index--;
        updateSlide();
    };
    const handleNextClick = () => {
        index++;
        updateSlide();
    };
    prev_btn.addEventListener('click', handlePrevClick);
    next_btn.addEventListener('click', handleNextClick);
    updateSlide();
}
slide();
