import Views from "./Views";

class SearchView extends Views {
    _parentElement = document.querySelector(".search__field");
    _searchInput = this._parentElement.querySelector("input");
    _form = this._parentElement.parentElement;
    _spinnerBox = document.querySelector(".search__spinner");
    _searchBtn = document.querySelector(".search__btn");
    _data;

    getQuery() {
        // console.log(this._searchInput);
        return this._searchInput.value;
    }

    searchInputHandler(fn) {
        this._parentElement.addEventListener("input", (e) => {
            console.log(this._searchInput.value);
            e.preventDefault();
            fn();
        });
    }

    clearInput() {
        this._searchInput.value = "";
    }

    clearSearchSpinner() {
        this._spinnerBox.innerHTML = "";
    }

    toggleRadius(state = undefined) {
        state === "on" ? (this._form.style.borderRadius = `20px 20px 0px 0px`) : (this._form.style.borderRadius = `30px`);
        state === "on" ? (this._searchBtn.style.borderRadius = `20px`) : (this._searchBtn.style.borderRadius = `30px`);
    }

    addSearchBlurHandler(fn) {
        this._searchInput.addEventListener("focus", () => {
            console.log(`addSearchBlurHandler`);
            if (this._searchInput.value < 4) return;
            fn("on");
        });
    }

    addSubmitHandler(fn) {
        this._form.addEventListener("submit", (e) => {
            console.log(`addSubmitHandler`);
            e.preventDefault();
            fn(0);
        });
    }
}

export default new SearchView();
