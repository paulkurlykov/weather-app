import Views from "./Views";
import * as model from "../model";

class DailyView extends Views {
    _parentElement = document.querySelector(".daily");
    _errorMessage = `We couldn't I don't know what, actually, I'm drunk now...`;

    _generateMarkup() {
        return `
        ${this._renderDailyView()}
        `;
    }

    _renderDailyView() {
        console.log("dialy rendering...");
        const days = this._data.days;
        const markup = days.map((day) => this._generateDailyMarkUp(day)).join(" ");
        return markup;
    }

    _generateDailyMarkUp(day) {
        return `
        <div class="daily__card">
            <div class="daily__weekday">${model.getWeekDay(day.datetimeEpoch * 1000)}</div>
            <div class="daily__date">${model.getRightDate(new Date(day.datetimeEpoch * 1000))}</div>
      
          <div class="daily__temp temp">

                <img class="temp__icon" src="svg/weather/static/clear-day.svg">
                <span class="temp__when temp__when--max">Днем</span>
                <span class="temp__value temp__value--max">${day.temp > 0 ? "+" + Math.round(day.temp) : Math.round(day.temp)}</span>
      
                <img class="temp__icon" src="svg/weather/static/clear-night.svg">
                <span class="temp__when temp__when--min">Ночью</span>
                <span class="temp__value temp__value--min">${day.tempmin > 0 ? "+" + Math.round(day.tempmin) : Math.round(day.tempmin)}</span>

          </div>
      
          <div class="daily__icon">
              <img src="svg/weather/animated/${day.icon}.svg">
          </div>
      
        <div class="daily__state">
          <span>${day.conditions}</span>
        </div>

      </div>
        `;
    }
}

export default new DailyView();
