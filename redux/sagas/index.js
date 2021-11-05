import { all, fork, call, delay, put, take, takeLatest } from "redux-saga/effects";
import * as demoSaga from './DemoSaga'
const arrFork = [];
for (let key in demoSaga) {
    arrFork.push(fork(demoSaga[key]))
}


function* rootSaga() {
    yield all(arrFork);
}
export default rootSaga;