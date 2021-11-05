import * as types from "../types/demo";
import { SHA256 } from "crypto-js";

export function demoAction(email, password, clientId, callback) {
  return {
    type: types.LOGIN_EMAIL,
    payload: { email, password: SHA256(password).toString(), clientId },
    callback,
  };
}
