import { timeout } from "./config";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const BDC_REVERSE_GEOCODE_API_URL = import.meta.env.VITE_BDC_REVERSE_GEOCODE_API_URL;
const BDC_API_KEY = import.meta.env.VITE_BDC_API_KEY;

console.log(API_KEY);
console.log(API_URL);


export const state = {
    coords: {},
    today: {},
    days: [],
    searchResults: [],
    errors: {
        browserAPI: false,
        fetchWeather: false,
    },
};

async function getLocationFromBrowserAPI() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    state.coords.lat = position.coords.latitude;
                    state.coords.lon = position.coords.longitude;
                    resolve(state);
                },
                function (err) {
                    if (err.PERMISSION_DENIED) reject(console.log("this is an error"));
                }
            );
        }
    });
}

export const defineCoords = async (latlon) => {
    if (!latlon) {
        try {
            await getLocationFromBrowserAPI();
            loadCityName(state.coords.lat, state.coords.lon);
        } catch (err) {
            state.browserAPI = true;
            console.error(`Couldn't get coords from browser API, trying to get from localStorage...`);
            try {
                // getLocalStorage();
                if (state.coords === null) {
                    throw new Error(`Не смогли определить твое местоположение. Попробуй воспользоваться поиском!`);
                }
            } catch (err) {
                throw err;
            }
        }
    } else {
        state.coords = latlon;
    }

    return state.coords;
};

export const setLocalStorage = () => {
    localStorage.setItem("coords", JSON.stringify(state.coords));
    localStorage.setItem("locationName", JSON.stringify(state.locationName));
};

export const getLocalStorage = () => {
    console.log("getting data from localStorage");
    state.coords = JSON.parse(localStorage.getItem("coords"));
    state.locationName = JSON.parse(localStorage.getItem("locationName"));
};

export function getCoordsFromSearchQuery(index) {
    state.coords = {};
    state.coords.lon = state.searchResults[index].lon;
    state.coords.lat = state.searchResults[index].lat;
    state.locationName = `${state.searchResults[index].display_name}`;
    console.log(`LOOKING FOR UNDEFINED LOCATION NAME: ${state.locationName}`);
    return state.coords;
}

export const loadWeatherData = async (lat, lon) => {
    try {
        const res = await fetch(`${API_URL}${lat}%2C%20${lon}?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${API_KEY}&contentType=json&lang=ru`);
        if (!res.ok) {
            state.fetchWeather = true;
            throw new Error("Не удалось получить данные. Попробуйте еще раз!");
        }
        const data = await res.json();
        state.today = data.currentConditions;
        state.days = data.days;
    } catch (err) {
        throw err;
    }
};

export async function loadCityName(lat, lon) {
    try {
        console.log('erer');
        const res = await Promise.race([fetch(`${BDC_REVERSE_GEOCODE_API_URL}?latitude=${lat}&longitude=${lon}&localityLanguage=ru&key=${BDC_API_KEY}`), timeout(3)]);
        if (!res.ok) throw new Error(`response is not OK, status: ${res.status}`);
        const data = await res.json();
        console.log(data);
        state.locationName = data?.city;
    } catch (err) {
        throw err;
    }
}

export async function getCoordsThrowCityName(cityName) {
    console.log(cityName);
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&accept-language=ru-RU`);
        if (!res.ok) throw new Error(`response is not OK, status: ${res.status}`);
        const data = await res.json();
        console.log(data);
        state.searchResults = data;
        console.log(state.searchResults);
    } catch (err) {
        throw err;
    }
}

(function setCurrentTime() {
    const curTime = new Date();

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
    };

    state.currentDate = getRightDate(curTime);
    state.currentTime = getRightTime(curTime);
})();

export function getRightDate(epoch, year = undefined) {
    const date = new Date(epoch);

    const dateOptions = {
        year: year ? "numeric" : undefined,
        month: "long",
        day: "numeric",
    };

    return new Intl.DateTimeFormat("ru-RU", dateOptions).format(date);
}

export function getRightTime(epoch) {
    const date = new Date(epoch);

    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
    };

    return new Intl.DateTimeFormat("ru-RU", timeOptions).format(date);
}

export function getWeekDay(epoch) {
    // console.log(epoch);
    const date = new Date(epoch);
    const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];

    return weekDays[date.getDay()];
}
