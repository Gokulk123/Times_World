import { put, call, takeEvery } from "redux-saga/effects";

import { getCountrySuccess, getCountryError } from "../actions/getCountry";

import { getAllCountry } from "../api/countries";

function* handleGetCountry(action) {
  try {
    const resp = yield call(getAllCountry, action.payload);
    yield put(getCountrySuccess(resp.data));
  } catch (error) {
    yield put(getCountryError(error.response));
  }
}

export default function* watchTenantAction() {
  yield takeEvery("GET_COUNTRY", handleGetCountry);
}
