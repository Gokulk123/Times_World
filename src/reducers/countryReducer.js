import produce from "immer";

const INITAL_STATE = {
  countries: {
    loading: false,
    list: [],
  },
};

export default (state = INITAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "GET_COUNTRY":
        draft.countries.loading = true;
        break;

      case "GET_COUNTRY_SUCCESS":
        draft.countries.list = action.response;
        break;

      case "GET_COUNTRY_ERROR":
        draft.countries.list = [];
        draft.countries.loading = false;
        break;

      default:
        return draft;
    }
  });
