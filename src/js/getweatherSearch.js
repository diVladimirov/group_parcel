import { getRefs } from "./getRefs";
import {markupWeather} from "./markupWeather";

const refs = getRefs();

refs.form.addEventListener("submit", handlerInput);

function handlerInput (event) {
  event.preventDefault();
  console.log(event.currentTarget.elements.searchQuery.value);
  const form = event.currentTarget;
  const userElements = form.elements.searchQuery.value;
  serchByName(userElements).then(markupWeather);
  // console.log(serchByName(userElements))

}

function serchByName (city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c8dab899c73e9fec8517804e94f0209&units=metric&lang=en`
  return fetch (url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
