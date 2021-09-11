const getCountry = () => ({
  type: "GET_COUNTRY",
});

const getCountrySuccess = (response) => ({
  type: "GET_COUNTRY_SUCCESS",
  response,
});

const getCountryError = () => ({
  type: "GET_COUNTRY_ERROR",
});

export { getCountry, getCountrySuccess, getCountryError };
