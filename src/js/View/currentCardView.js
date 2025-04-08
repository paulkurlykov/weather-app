import Views from "./Views";
import * as model from "../model";

class CurrentCardView extends Views {
    _parentElement = document.querySelector(".current-card");
    _errorMessage = `We couldn't I don't know what, actually, I'm drunk now...`;
    // _uvIndexDescription;
    // _moonphases = ["new", "waxing-crescent", "first-quarter", "waxing-gibbous", "full", "waning-gibbous", "last-quarter", "waning-crescent"];
    // _directions = ["Северный", "Северо-восточный", "Восточный", "Юго-восточный", "Южный", "Юго-западный", "Западный", "Северо-западный"];

    // setUVIndexColor(value) {
    //     const uvValue = document.querySelector(".uvindex > div > .prop__value");
    //     const uvText = document.querySelector(".uvindex > div > .prop__prefix");

    //     if (value >= 0 && value < 3) {
    //         uvValue.classList.add("gradient--green");
    //         uvText.classList.add("gradient--green");
    //         uvText.innerText = "Низкий";
    //     } else if (value >= 3 && value < 6) {
    //         uvValue.classList.add("gradient--yellow");
    //         uvText.classList.add("gradient--yellow");
    //         uvText.innerText = "Средний";
    //     } else if (value >= 6 && value < 8) {
    //         uvValue.classList.add("gradient--orange");
    //         uvText.classList.add("gradient--orange");
    //         uvText.innerText = "Повышенный";
    //     } else {
    //         uvValue.classList.add("gradient--red");
    //         uvText.classList.add("gradient--red");
    //         uvText.innerText = "Высокий";
    //     }
    // }

    // setWindDirection(value) {
    //     const compassIcon = document.querySelector(".prop__icon--compass");
    //     // const compassIcon = document.querySelector("#compass-dir");
    //     let dirEl = document.querySelector(".wind-2 > .prop__value");
    //     switch (true) {
    //         case (value >= 337.5 && value <= 360) || (value >= 0 && value < 22.4):
    //             dirEl.innerText = this._directions[0];
    //             break;
    //         case value >= 22.5 && value < 67.5:
    //             dirEl.innerText = this._directions[1];
    //             break;
    //         case value >= 67.5 && value < 112.5:
    //             dirEl.innerText = this._directions[2];
    //             break;
    //         case value >= 112.5 && value < 157.5:
    //             dirEl.innerText = this._directions[3];
    //             break;
    //         case value >= 157.5 && value < 202.5:
    //             dirEl.innerText = this._directions[4];
    //             break;
    //         case value >= 202.5 && value < 247.5:
    //             dirEl.innerText = this._directions[5];
    //             break;
    //         case value > 247.5 && value < 292.5:
    //             dirEl.innerText = this._directions[6];
    //             break;
    //         case value > 292.5 && value < 337.5:
    //             dirEl.innerText = this._directions[7];
    //             break;
    //     }

    //     compassIcon.style.transform = `rotate(${value + 0}deg)`;
    // }

    // geenerateMoonPhaseMarkUp(value) {
    //     let iconName;
    //     switch (true) {
    //         case value == 0:
    //             iconName = this._moonphases[0];
    //             break;
    //         case value > 0 && value < 0.25:
    //             iconName = this._moonphases[1];
    //             break;
    //         case value == 0.25:
    //             iconName = this._moonphases[2];
    //             break;
    //         case value > 0.25 && value < 0.5:
    //             iconName = this._moonphases[3];
    //             break;
    //         case value == 0.5:
    //             iconName = this._moonphases[4];
    //             break;
    //         case value > 0.5 && value < 0.75:
    //             iconName = this._moonphases[5];
    //             break;
    //         case value == 0.75:
    //             iconName = this._moonphases[6];
    //             break;
    //         case value > 0.75 && value < 1:
    //             iconName = this._moonphases[7];
    //             break;
    //     }

    //     const ind = this._moonphases.indexOf(iconName);

    //     return `
    //     <div class="prop prop--double moonphase">
    //                 <p class="prop__name">Фаза луны</p>
    //                 <svg class="prop__icon prop__icon--1">
    //                     <use href="svg/moonphases/sprite.svg#moon-${this._moonphases[ind == 0 ? 7 : ind - 1]}"></use>
    //                 </svg>
    //                 <svg class="prop__icon prop__icon--arrow-1">
    //                     <use href="svg/moonphases/sprite.svg#curved-arrow"></use>
    //                 </svg>
    //                 <svg class="prop__icon prop__icon--2">
    //                     <use href="svg/moonphases/sprite.svg#moon-${this._moonphases[ind]}"></use>
    //                 </svg>
    //                 <svg class="prop__icon prop__icon--arrow-2">
    //                     <use href="svg/moonphases/sprite.svg#curved-arrow"></use>
    //                 </svg>
    //                 <svg class="prop__icon prop__icon--3">
    //                     <use href="svg/moonphases/sprite.svg#moon-${this._moonphases[ind == 7 ? 0 : ind + 1]}"></use>
    //                 </svg>
    //             </div>
    //     `;
    // }

    _generateMarkup() {
        return `

          <div class="current-card__status-box">

            <div class="current-card__now"
                <span>Сейчас, <span>${this._data.currentTime}, ${this._data.currentDate}</span></span>
            </div>
          <div class="current-card__location">
            <div class="current-card__location-logo">
              <svg>
                <use xlink:href="svg/common/sprite.svg#location"></use>
              </svg>
            </div>
            <span class="current-card__location-name">${this._data.locationName}</span>
          </div>

        <div class="current-card__temperature">
          <span>${this._data.today.temp > 0 ? "+" + Math.round(this._data.today.temp) : Math.round(this._data.today.temp)}</span>
        </div>
        <div class="current-card__icon">
          <img src="svg/weather/animated/${this._data.today.icon}.svg" alt="something" />
        </div>
        <div class="current-card__state">
          <span>${this._data.today.conditions}</span>
        </div>
        <div class="current-card__feels-like">
        <svg>
            <use xlink:href="svg/common/sprite.svg#feelslike"></use>
            </svg>
          <p>
            Ощущается, как
            <span>${this._data.today.feelslike > 0 ? "+" + Math.round(this._data.today.feelslike) : Math.round(this._data.today.feelslike)}</span>
          </p>
        </div>
          </div>
    
          <div class="prop prop--1">
          <p class="prop__name">влажность</p>
          <svg class="prop__icon">
            <use xlink:href="svg/common/sprite.svg#humidity"></use>
          </svg>
          <span class="prop__value">${Math.round(this._data.today.humidity)}%</span>
          <span class="prop__prefix"></span>
        </div>
        <div class="prop prop--2">
          <p class="prop__name">давление</p>
          <svg class="prop__icon">
          <use xlink:href="svg/common/sprite.svg#barometer"></use>
          </svg>
          <div class="prop__value-box">
          <span class="prop__value">${Math.round(this._data.today.pressure / 1.33322)}</span>
          <span class="prop__prefix">мм рт. ст.</span>
          </div>
        </div>
        <div class="prop prop--3">
          <p class="prop__name">вероятность дождя</p>
          <svg class="prop__icon">
          <use xlink:href="svg/common/sprite.svg#raindrop-measure"></use>
          </svg>
          <span class="prop__value">${Math.round(this._data.days[0].precipprob)}%</span>
          <span class="prop__prefix"></span>
        </div>
        `;
    }
}

export default new CurrentCardView();
