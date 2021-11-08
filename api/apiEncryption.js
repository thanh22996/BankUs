import axios from "axios";
import _ from "lodash";

const Request = {
  callAPI(method, url, pathUrl, args, headers) {
    return new Promise(async (resolve, reject) => {
      try {
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
          Accept: "*",
          "Content-Type": "application/json; charset=utf-8",
        };

        let apiBody = args;

        const option = {
          method,
          url: apiUrl,
          headers: apiHeader,
          timeout: 2 * 60 * 1000,
        };

        if (method.toUpperCase() !== "GET") {
          option.data = apiBody;
        }

        console.log("option", option, pathUrl);
        const response = await axios(option);

        console.log({ method, url, pathUrl, args, headers, response });
        resolve(response.data);
      } catch (error) {
        if (error) console.log(error);
        resolve({
          code: -1001,
          data: { message: "Lỗi kết nối server, xin vui lòng thử lại sau." },
        });
      }
    });
  },
};

export default Request;
