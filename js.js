document.querySelectorAll('.img').forEach(container => {
    const imgContainer = container.querySelector('.img-images');
    const images = container.querySelectorAll('img');
    let currentIndex = 0;

    function scrollImages() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        const offset = -currentIndex * 100;
        imgContainer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(scrollImages, 3000); // Change image every 3 seconds
});