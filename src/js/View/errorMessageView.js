import Views from "./Views";

class ErrorMessageView extends Views {
    _parentElement = document.querySelector(".main");
    _locationErrorMessage = `Не удалось определить ваше текущее местоположение. Разрешите отслеживание вашей локации для этого сайта или воспользуйтесь поиском.`;
    _fetchErrorMessage = `Не удалось загрузить данные с сервера. Попробуйте еще раз!`;

    _generateMarkup() {
        return `<div class="error">
        <svg class="error__icon">
            <use xlink:href="svg/common/sprite.svg#location-error"></use>
        </svg>
        <h1 class="error__title">${this._locationErrorMessage}</h1>
        <button class="error__btn">найти</button>
    </div>`;
    }
}

export default new ErrorMessageView();
