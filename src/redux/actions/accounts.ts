import { call, put, select } from "redux-saga/effects";
import { getAllAccounts } from "src/services/account";

export const ACTION_FETCH_ACCOUNTS = `[accounts] Fetch accounts`;
export const ACTION_FETCHED_ACCOUNTS = `[accounts] Fetched accounts`;
export const ACTION_FETCH_FAIL_ACCOUNTS = `[accounts] Fetch fail accounts`;

export function* actionFetchAccounts() {
  try {
    console.log(select());
    // const { data } = yield call(getAllAccounts, select());
    yield put({
      type: ACTION_FETCHED_ACCOUNTS,
      data: []
    });
  } catch (error) {
    yield put({
      type: ACTION_FETCH_FAIL_ACCOUNTS
    });
  }
}
