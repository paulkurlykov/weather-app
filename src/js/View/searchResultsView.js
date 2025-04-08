import Views from "./Views";

class searchResultsView extends Views {
    _parentElement = document.querySelector(".suggestions");
    _data;

    _generateMarkup() {
        function markup(result, i) {
            return `
            <div class="suggestions__item" data-index="${i}" >
                <div class="suggestions__icon">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="svg/common/sprite.svg#location"></use>
                    </svg>
                </div>
                <p class="suggestions__text">${result.display_name.split(", ").filter((item, index, self) => index === 0 || index === self.length - 1).join(", ")}</p>
                <div class="suggestions__border"></div>
            </div>
            `;
        }

        return this._data.map((result, i) => markup(result, i)).join(" ");
    }

    toggleDisplaying(state = undefined) {
        state === "on" ? (this._parentElement.style.visibility = "visible") : (this._parentElement.style.visibility = "hidden");
    }

    addClickHandler(fn) {
        console.log(`handler is on AIR`);
        document.querySelector(".suggestions").addEventListener("click", (e) => {
            console.log(`addClickHandler`);
            console.log(`Click Handler is workin and ready to givin an index`);
            console.log(e.target);
            const target = e.target.closest(".suggestions__item");
            if (!target) return;
            const targetIndex = target.getAttribute("data-index");
            fn(targetIndex);
        });
    }

    addClickToBlurHandler(fn) {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".search")) return;
            fn();
        });
    }
}

export default new searchResultsView();
