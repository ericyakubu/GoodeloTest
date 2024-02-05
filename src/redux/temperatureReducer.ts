interface StoreType {
  co2: string;
  temp: string;
}

const defaultStore: StoreType = {
  co2: "500",
  temp: "27.27",
};

const SET_TEMP = "set_temp";

interface ActionType {
  type: string;
  payload: StoreType;
}

export const tempReducer = (state = defaultStore, action: ActionType) => {
  switch (action.type) {
    case SET_TEMP:
      return { ...state, co2: action.payload.co2, temp: action.payload.temp };
    default:
      return state;
  }
};

export const setTemp = (payload: StoreType) => ({
  type: SET_TEMP,
  payload,
});
