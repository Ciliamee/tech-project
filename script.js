

document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('zoomable-image');
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;
    let translateX = 0;
    let translateY = 0;
    let currentScale = 1;
    const maxZoom = 3; // Set your maximum zoom level here
    const zoomIncrement = 0.5; // Set the amount of zoom increment per tap

    // Function to handle tap event
    function handleTap(event) {
        currentScale = Math.min(maxZoom, currentScale + zoomIncrement);
        image.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    }

   

    // Function to handle touch start event
    function handleTouchStart(event) {
        if (event.touches.length === 1 && currentScale > 1) {
            isDragging = true;
            initialX = event.touches[0].clientX - translateX;
            initialY = event.touches[0].clientY - translateY;
        }
    }

    // Function to handle touch move event
    function handleTouchMove(event) {
        if (isDragging) {
            currentX = event.touches[0].clientX;
            currentY = event.touches[0].clientY;
            translateX = currentX - initialX;
            translateY = currentY - initialY;
            image.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
        }
    }

    // Function to handle touch end event
    function handleTouchEnd(event) {
        isDragging = false;
    }

    // Add event listeners
    image.addEventListener('click', handleTap);
   
    image.addEventListener('touchstart', handleTouchStart);
    image.addEventListener('touchmove', handleTouchMove);
    image.addEventListener('touchend', handleTouchEnd);
});


