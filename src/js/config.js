// WEATHER API
export const API_KEY = "ZRD2ZJXT7Z9RFNMGQC5XCJW3X";
export const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

// YANDEX API
export const API_YA_KEY = "ce589958-75b9-42f6-9c88-37ecb623a76f";
export const API_YA_URL = "https://geocode-maps.yandex.ru/1.x";



// GEOCODING
// https://open-meteo.com/en/docs/geocoding-api

export const BDC_REVERSE_GEOCODE_API_URL = `https://api-bdc.net/data/reverse-geocode`;
export const BDC_GEOCODE_API_URL = `https://api-bdc.net/data/geocode`;
export const BDC_API_KEY = `bdc_397f0b96ceef4451881506d3bb1c378c`;



// MAP API

export const API_URL_MAP = "https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}";

export const timeout = (s) => {
    return new Promise((_, reject) => {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
