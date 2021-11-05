import { call, takeLatest, put } from "redux-saga/effects";
import ServicesGapi from "services/gapi.services";
import * as types from "redux/types/demo";
import _ from "lodash";
import { saveToken } from "helpers/utils";

function* doAction(action) {
  const { payload, callback = null } = action;
  try {
    yield put({
      type: types.LOGIN_EMAIL_REQUEST,
    });

    const res = yield call(
      ServicesGapi.callGAPI,
      "POST",
      "/Account/Login/Email",
      payload
    );

    if (res.code === 100000) {
      callback && callback(true, res);
      yield put({
        type: types.LOGIN_EMAIL_SUCCESS,
        payload: {
          data: res,
        },
      });
    } else {
      callback && callback(false, res);
      yield put({
        type: types.LOGIN_EMAIL_FAILURE,
        payload: { error: res },
      });
    }
  } catch (error) {
    console.log("--error--", error);
    callback &&
      callback(false, { code: -1001, message: "Connect server error [-1001]" });
    yield put({
      type: types.LOGIN_EMAILL_FAILURE,
      payload: {
        error: { code: -1001, message: "Connect server error [-1001]" },
      },
    });
  } finally {
    yield put({
      type: types.LOGIN_EMAIL_REFRESH,
    });
  }
}

export default function* watchAction() {
  yield takeLatest(types.LOGIN_EMAIL, doAction);
}
