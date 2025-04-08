import "./src/scss/style.scss";

// JS
import * as model from "./src/js/model";
import currentCardView from "./src/js/View/currentCardView";
import hourlySliderView from "./src/js/View/hourlySliderView";
import hourlyView from "./src/js/View/hourlyView";
import dailyView from "./src/js/View/dailyView";
import searchView from "./src/js/View/searchView";
import searchResultsView from "./src/js/View/searchResultsView";
import currentPropsView from "./src/js/View/currentPropsView";
import errorMessageView from "./src/js/View/errorMessageView";

const init = () => {
    searchView.clearInput();
    controlCityWeather();
    searchView.searchInputHandler(controlSearchSuggestions);
    searchView.addSearchBlurHandler(controlDisplayingSuggestions);
    searchResultsView.addClickHandler(controlControlWeather);
    searchView.addSubmitHandler(controlControlWeather);
    searchResultsView.addClickToBlurHandler(controlDisplayingSuggestions);
};

const renderSectionSpinners = () => {
    currentCardView.renderSectionSpinner();
    currentPropsView.renderSectionSpinner();
    hourlyView.renderSectionSpinner();
    dailyView.renderSectionSpinner();
};

const renderMarkUps = (data) => {
    currentCardView.render(data);
    currentPropsView.render(data);
    hourlyView.render(data);
    dailyView.render(data);
};

const controlCityWeather = async (latlon) => {
    try {
        renderSectionSpinners();
        const coords = await model.defineCoords(latlon);
        await model.loadWeatherData(coords.lat, coords.lon);
        renderMarkUps(model.state);
        currentPropsView.setUVIndexColor(model.state.today.uvindex);
        currentPropsView.setWindDirection(model.state.today.winddir);

        hourlySliderView.init();
        hourlySliderView.btnsHandler();
    } catch (err) {
        console.log("ERROR!!!");
        console.error(err);
        errorMessageView.render();
    }
};

const controlControlWeather = (index) => {
    console.log(`Got index and ready to load forecast`);
    controlCityWeather(model.getCoordsFromSearchQuery(index));
    searchView.clearInput();
    controlDisplayingSuggestions();
    model.setLocalStorage();
};

const controlSearchSuggestions = async () => {
    try {
        let query = searchView.getQuery();
        console.log(query);
        if (query.length < 4) {
            controlDisplayingSuggestions();
        } else {
            console.log(`spinner is starting`);
            searchView.renderSearchSpinner();
            await model.getCoordsThrowCityName(query);
            searchView.clearSearchSpinner();

            if (model.state.searchResults.length == 0) {
                controlDisplayingSuggestions();
            } else {
                searchResultsView.render(model.state.searchResults);
                controlDisplayingSuggestions("on");
            }
        }
    } catch (e) {
        console.log(e);
    }
};

const controlDisplayingSuggestions = (state) => {
    searchResultsView.toggleDisplaying(state);
    searchView.toggleRadius(state);
};

init();
