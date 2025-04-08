// const createWeatherObject = (obj) => {
//     if (data.hasOwnProperty("list")) {
//         let arr = [];
//         data.list.forEach((obj) => {
//             arr.push({
//                 time: obj.dt_txt,
//                 timestamp: obj.dt,
//                 temperature: obj.main.temp,
//                 tempMin: obj.main.temp_min,
//                 tempMax: obj.main.temp_max,
//                 pressure: obj.main.pressure,
//                 humidity: obj.main.humidity,
//                 feelsLike: obj.main.feels_like,
//                 description: obj.weather[0].description,
//                 icon: obj.weather[0].icon,
//                 state: obj.weather[0].main,
//                 windSpeed: obj.wind.speed,
//                 windDirection: obj.wind.deg,
//             });
//         });

//         return arr;
//     }
//     return {
//         cloudsRate: data.clouds.all,
//         time: data.dt,
//         temperature: data.main.temp,
//         tempMin: data.main.temp_min,
//         tempMax: data.main.temp_max,
//         pressure: data.main.pressure,
//         humidity: data.main.humidity,
//         feelsLike: data.main.feels_like,
//         locationName: data.name,
//         sunrise: data.sys.sunrise,
//         sunset: data.sys.sunset,
//         description: data.weather[0].description,
//         icon: data.weather[0].icon,
//         state: data.weather[0].main,
//         windSpeed: data.wind.speed,
//         windDirection: data.wind.deg,
//     };
// };

// export async function getCurrentWeather(lat, lon) {
//     try {
//         const res = await fetch(`${API_URL}lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API_KEY}`);
//         const data = await res.json();
//         console.log(data);
//         state.weather = createWeatherObject(data);
//     } catch (error) {
//         throw error;
//     }
// }

// export async function getHourlyForecast(lat, lon) {
//     try {
//         const res = await fetch(`${API_FORECAST_URL}lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API_KEY}`);
//         const data = await res.json();
//         console.log(data);
//         state.forecast = createWeatherObject(data);
//         console.log(state.forecast);
//         state.forecast.forEach((obj) => {
//             console.log(new Date(obj.timestamp * 1000));
//         });
//     } catch (error) {
//         throw error;
//     }
// }

// export async function testWeather(lat, lon) {
//     try {
//         const res = await fetch(
//             `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,surface_pressure,cloud_cover,wind_speed_80m,wind_direction_80m&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timeformat=unixtime&timezone=Europe%2FMoscow&past_days=1`
//         );
//         const data = await res.json();
//         console.log(data);
//         // state.weather = createWeatherObject(data);
//     } catch (error) {
//         throw error;
//     }
// }
