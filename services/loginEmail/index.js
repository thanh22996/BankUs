import { HTTP_METHOD } from "api/core";
import Request from "api/apiEncryption";
import { PORTAL_MC_API_ROUTE } from "./constants";

const signInEmail = {
  loginEmail: async (data) => {
    const results = await signInEmail.callGAPI(
      HTTP_METHOD.POST,
      data,
      PORTAL_MC_API_ROUTE.LOGIN_BY_EMAIL,
      false
    );
    return results;
  },

  callGAPI(method, body, pathUrl, isSecurity = false, headers = {}) {
    return Request.callAPI(
      method,
      process.env.NEXT_PUBLIC_API_PORTAL_MC,
      pathUrl,
      body,
      headers,
      false
    );
  },
};

export default signInEmail;
