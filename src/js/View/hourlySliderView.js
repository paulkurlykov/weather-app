class HourlySliderView {
    _slides;
    _btnLeft = document.querySelector(".hourly__btn--left");
    _btnRight = document.querySelector(".hourly__btn--right");
    _parentElement = document.querySelector(".main");

    init() {
        this._slides = document.querySelectorAll(".hourly__card");
        const slider = document.querySelector(".hourly__slider");
        this._slider = document.querySelector(".hourly__slider");
        const hourly = document.querySelector(".hourly");
        this._sliderScrollHandler(slider);
    }

    _sliderScrollHandler(box) {
        box.addEventListener("wheel", (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                box.scrollLeft += event.deltaY;
            }
        });
    }

    btnsHandler() {
        this._parentElement.addEventListener("click", (e) => {
            const btn = e.target.closest(".hourly__btn--left") || e.target.closest(".hourly__btn--right");
            if (!btn) return;
            if (btn.classList.contains("hourly__btn--left")) this._slider.scrollBy({ top: 0, left: -400, behavior: "smooth" });
            if (btn.classList.contains("hourly__btn--right")) this._slider.scrollBy({ top: 0, left: 400, behavior: "smooth" });
        });
    }
}

export default new HourlySliderView();
