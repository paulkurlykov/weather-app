import Views from "./Views";
import * as model from "../model";

class HourlyView extends Views {
    _parentElement = document.querySelector(".hourly");
    _errorMessage = `We couldn't I don't know what, actually, I'm drunk now...`;

    _generateMarkup() {
        console.log("rendering Hourly");
        return `
        <!-- HOURLY BOX -->

<div class="hourly__slider">
${this._renderHourlyView()}
</div>

<button class="hourly__btn hourly__btn--left">
  <svg>
    <use href="svg/common/sprite.svg#arrow-left"></use>
  </svg>
</button>

<button class="hourly__btn hourly__btn--right">
  <svg>
    <use href="svg/common/sprite.svg#arrow-right"></use>
  </svg>
</button>
        `;
    }

    _renderHourlyView() {
        console.log("renderHourlyCView");
        const currentHour = +this._data.currentTime.slice(0, 2);
        const hours = [...this._data.days[0].hours.slice(-(23 - currentHour)), ...this._data.days[1].hours.slice(0, currentHour + 1)];
        const markup = hours.map((hour) => this._generateHourlyCardMarkUp(hour)).join(" ");
        return markup;
    }

    _generateHourlyCardMarkUp(hour) {
        console.log("renderHourlyCardMarkup");
        return `<div class="hourly__card">
  <span class="hourly__time">${hour.datetime.slice(0, 5)}</span>
  <span class="hourly__date">${model.getRightDate(new Date(hour.datetimeEpoch * 1000))}</span>
    <img class="hourly__icon" src="svg/weather/static/${hour.icon}.svg">
  <span class="hourly__temp">${hour.temp > 0 ? "+" + Math.round(hour.temp) : Math.round(hour.temp)}</span>
</div>`;
    }
}

export default new HourlyView();
