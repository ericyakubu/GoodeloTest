import { createStore, combineReducers } from "redux";
import { tempReducer } from "./temperatureReducer";

interface TemperatureState {
  co2: string;
  temp: string;
}

export interface RootState {
  temperature: TemperatureState;
}

const rootReducer = combineReducers({
  temperature: tempReducer,
});

export const store = createStore(rootReducer);
