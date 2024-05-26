const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
      updateSlider(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
      updateSlider(currentIndex);
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-slide'));
        updateSlider(currentIndex);
      });
    });

    updateSlider(currentIndex);
