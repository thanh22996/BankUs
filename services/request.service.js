import axios from "axios";
import _ from "lodash";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const Request = {
  callAPI(
    method,
    url,
    pathUrl,
    args,
    headers,
    isSecurity = false,
    publicKey = null,
    privateKey = null
  ) {
    return new Promise(async (resolve, reject) => {
      const language = "vi";
      try {
        // let lang = language.i18nState.lang

        let accessToken = "";

        let lang = "vi";
        if (args && args.accessToken) {
          accessToken = `${args.accessToken}`;
          delete args.accessToken;
        }

        if (args && args.lang) {
          lang = `${args.lang}`;
          delete args.lang;
        }
        let apiUrl = `${url}${pathUrl}`;

        let apiHeader = {
          Authorization: accessToken,
          ...headers,
          Language: lang,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*",
        };

        let apiBody = args;
        if (isSecurity) {
          apiUrl = `${url}${pathUrl}`;
          const encrypt = Request.RequestEncrypt(
            pathUrl,
            method.toUpperCase(),
            method.toUpperCase() === "GET" ? "" : apiBody,
            apiHeader.Authorization || "",
            publicKey
          );
          apiHeader = { ...encrypt.headers, ...apiHeader };
          apiBody = encrypt.body;
        }
        const option = {
          method,
          url: apiUrl,
          headers: apiHeader,
          timeout: 2 * 60 * 1000,
        };

        if (method.toUpperCase() !== "GET") {
          option.data = apiBody;
        }

        const response = await axios(option);
        if (response.status !== 200) {
          // if (getParameterByName('dev', window.location.search) === 'debug') {
          console.log(
            { method, url, pathUrl, args, headers },
            response.data || {}
          );
          // }
          resolve(
            response.data || {
              code: -1001,
              message: "L???i k???t n???i server, xin vui l??ng th??? l???i sau.",
            }
          );
        }

        if (isSecurity) {
          const httpResponse = response.headers;
          const ketqua = Request.ResponseDecrypt(
            httpResponse["x-api-action"],
            method.toUpperCase(),
            httpResponse["x-api-client"],
            httpResponse["x-api-key"],
            response.data["x-api-message"],
            httpResponse["x-api-validate"],
            apiHeader.Authorization || "",
            privateKey
          );
          // if (getParameterByName('dev', window.location.search) === 'debug') {
          console.log({ method, url, pathUrl, args, headers }, ketqua);
          // }
          return resolve(ketqua);
        }
        // if (getParameterByName('dev', window.location.search) === 'debug') {
        console.log({ method, url, pathUrl, args, headers }, response);
        // }
        resolve(response.data);
      } catch (error) {
        if (error) console.log(error);
        resolve({
          code: -1001,
          message: "L???i k???t n???i server, xin vui l??ng th??? l???i sau.",
          data: { message: "L???i k???t n???i server, xin vui l??ng th??? l???i sau." },
        });
      }
    });
  },

  RequestEncrypt(pathUrl, method, payload, accessToken, publicKey) {
    const encryptKey = ShortId.generate();
    const key = new NodeRSA(publicKey);
    const xAPIKey = key.encrypt(encryptKey, "base64");
    let body = "";
    const xApiAction = CryptoJS.AES.encrypt(pathUrl, encryptKey).toString();
    let xApiMessage = "";
    if (payload) {
      xApiMessage = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        encryptKey
      ).toString();
    }
    const objValidate = {
      "x-api-action": xApiAction,
      method,
      accessToken,
      "x-api-message": xApiMessage,
    };
    const xAPIValidate = md5(_.values(objValidate).join("") + encryptKey);
    body = {
      "x-api-message": xApiMessage,
    };
    const meAPIHeader = {
      "x-api-client": "app",
      "x-api-key": xAPIKey,
      "x-api-action": xApiAction,
      "x-api-validate": xAPIValidate,
    };
    if (accessToken !== "") {
      meAPIHeader.Authorization = accessToken;
    }
    return {
      body,
      headers: meAPIHeader,
    };
  },

  ResponseDecrypt(
    xAPIAction,
    method,
    xAPIClient,
    xAPIKey,
    xAPIMessage,
    xAPIValidate,
    accessToken,
    privateKey
  ) {
    let encryptKey;
    try {
      const key = new NodeRSA(privateKey);
      encryptKey = key.decrypt(xAPIKey, "utf8");
    } catch (error) {
      console.log("error", error);
      return {
        code: -1009,
        data: { message: "L???i gi???i m?? l???y kh??a x??c th???c API kh??ng th??nh c??ng" },
      };
      // throw new Error('Th??ng tin "x-api-key" kh??ng ch??nh x??c');
    }

    const objValidate = {
      "x-api-action": xAPIAction,
      method,
      accessToken,
      "x-api-message": xAPIMessage,
    };
    const validate = md5(_.values(objValidate).join("") + encryptKey);

    if (validate !== xAPIValidate) {
      return { code: -1009, data: { message: "L???i x??c th???c token API" } };
      // throw new Error();
    }
    let result = null;
    try {
      result = JSON.parse(
        CryptoJS.AES.decrypt(xAPIMessage, encryptKey).toString(
          CryptoJS.enc.Utf8
        )
      );
    } catch (error) {
      return {
        code: -1009,
        data: { message: "D??? li???u API tr??? v??? l???i ho???c kh??ng gi???i m?? ???????c" },
      };
      // throw new Error('Th??ng tin "x-api-message" kh??ng ch??nh x??c');
    }
    return result;
  },
  ResponseDecryptSubscription(
    xAPIAction,
    method,
    xAPIClient,
    xAPIKey,
    xAPIMessage,
    xAPIValidate,
    accessToken,
    privateKey
  ) {
    let encryptKey;
    try {
      const key = new NodeRSA(privateKey);
      encryptKey = key.decrypt(xAPIKey, "utf8");
    } catch (error) {
      console.log("error", error);
      return {
        code: -1009,
        data: { message: "L???i gi???i m?? l???y kh??a x??c th???c API kh??ng th??nh c??ng" },
      };
    }
    const objValidate = {
      "x-api-message": xAPIMessage,
    };
    const validate = md5(_.values(objValidate).join("") + encryptKey);
    if (validate !== xAPIValidate) {
      return { code: -1009, data: { message: "L???i x??c th???c token API" } };
    }
    let result = null;
    try {
      result = JSON.parse(
        CryptoJS.AES.decrypt(xAPIMessage, encryptKey).toString(
          CryptoJS.enc.Utf8
        )
      );
    } catch (error) {
      return {
        code: -1009,
        data: { message: "D??? li???u API tr??? v??? l???i ho???c kh??ng gi???i m?? ???????c" },
      };
      // throw new Error('Th??ng tin "x-api-message" kh??ng ch??nh x??c');
    }
    return result;
  },

  callGraphql(
    API_URL,
    query,
    variables = {},
    headers = {},
    isSecurity = false,
    publicKey = null,
    privateKey = null
  ) {
    return this.callAPI(
      "POST",
      API_URL,
      "/graphql",
      { query, variables },
      headers,
      isSecurity,
      publicKey,
      privateKey
    );
  },
};

export default Request;
