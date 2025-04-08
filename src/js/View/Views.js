export default class Views {
    _data;

    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this.toggleDisplayBlock("del");
        this._clear();
        this._insertHTML(markup);
    }

    _insertHTML(markup) {
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    renderErrorMessage(err = this._errorMessage) {
        const markup = `<div class="error">
      <div>
          <svg>
              <use href="${icons}#icon-alert-triangle"></use>
          </svg>
      </div>
      <p>${this._errorMessage}</p>
  </div>`;
        this._clear();
        this._insertHTML(markup);
    }

    renderMessage(message = this._message) {
        const markup = `<div class="message">
    <div>
        <svg>
            <use href="${icons}#icon-smile"></use>
        </svg>
    </div>
    <p>${message}</p>
</div>`;
        this._clear();
        this._insertHTML(markup);
    }

    renderSearchSpinner() {
        const markup = `<div class="spring-spinner">
        <div class="spring-spinner-part top">
          <div class="spring-spinner-rotator"></div>
        </div>
        <div class="spring-spinner-part bottom">
          <div class="spring-spinner-rotator"></div>
        </div>
      </div>`;
        this._spinnerBox.innerHTML = "";
        this._spinnerBox.insertAdjacentHTML("beforeend", markup);
    }

    renderSectionSpinner() {
        const markup = `<span class="loader"></span>`;
        this._clear();
        this.toggleDisplayBlock("add");
        this._insertHTML(markup);
    }

    toggleDisplayBlock(act) {
        act === "add" ? this._parentElement.classList.add("makeflex") : act === "del" ? this._parentElement.classList.remove("makeflex") : "";
    }
}
