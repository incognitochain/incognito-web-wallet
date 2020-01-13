import { put, takeEvery, call } from "redux-saga/effects";
import {
  CREATE_WALLET,
  CREATE_WALLET_FAILED,
  CREATE_WALLET_SUCCESS,
  LOAD_WALLET,
  LOAD_WALLET_FAILED,
  LOAD_WALLET_SUCCESS
} from "src/redux/actionTypes";
import { initWallet, loadWallet } from "src/services/wallet";
import {
  ACTION_FETCH_ACCOUNTS,
  actionFetchAccounts
} from "src/redux/actions/accounts";

export function* loadWalletEffect() {
  try {
    const wallet = yield call(loadWallet);
    if (wallet) {
      yield put({ type: LOAD_WALLET_SUCCESS, payload: wallet });
    } else {
      yield put({ type: CREATE_WALLET });
    }
  } catch (e) {
    yield put({ type: LOAD_WALLET_FAILED, error: e.message });
  }
}

export function* createWalletEffect() {
  try {
    const wallet = yield call(initWallet);
    yield put({ type: CREATE_WALLET_SUCCESS, payload: wallet });
  } catch (e) {
    yield put({ type: CREATE_WALLET_FAILED, error: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(LOAD_WALLET, loadWalletEffect);
  yield takeEvery(CREATE_WALLET, createWalletEffect);
  yield takeEvery(ACTION_FETCH_ACCOUNTS, actionFetchAccounts);
}
