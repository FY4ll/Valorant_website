let rankObj = [
    "iron",
    "bronze",
    "silver",

]
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
    );

    const buttons = carousel.querySelectorAll(".carousel__button");
    let currentItemIndex = 0;

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            setCurrentItem(i);
        });
    });

    function setCurrentItem(index) {
        // un-select all the items
        items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
        );

        items[index].classList.add("carousel__item--selected");
        buttons[index].classList.add("carousel__button--selected");
        currentItemIndex = index;
    }

    // Select the first item on page load
    setCurrentItem(0);

    // Listen for keyboard events
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                if (currentItemIndex > 0) {
                    setCurrentItem(currentItemIndex - 1);
                }
                break;
            case "ArrowRight":
                if (currentItemIndex < items.length - 1) {
                    setCurrentItem(currentItemIndex + 1);
                }
                break;
            default:
                break;
        }
    });

    // Listen for touch events on mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const minSwipeDistance = 50; // Minimum distance required to trigger a swipe

        if (touchEndX - touchStartX > minSwipeDistance && currentItemIndex > 0) {
            setCurrentItem(currentItemIndex - 1); // Swipe to the left
        } else if (touchStartX - touchEndX > minSwipeDistance && currentItemIndex < items.length - 1) {
            setCurrentItem(currentItemIndex + 1); // Swipe to the right
        }
    }
});
var myImage = document.getElementById('imortal');

myImage.addEventListener('animationend', function() {
    myImage.style.animationFillMode = 'forwards';
});
