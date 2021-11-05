import Request from "./request.service";
import nextConfig from '../next.config';

const GApiServices = {

  callGAPI(method, pathUrl, body, headers = {}) {
    return Request.callAPI(
      method,
      nextConfig.gapi.url,
      pathUrl,
      body,
      headers,
      nextConfig.gapi.isSecurity,
      nextConfig.gapi.publicKey,
      nextConfig.gapi.privateKey
    );
  },
};

export default GApiServices;
