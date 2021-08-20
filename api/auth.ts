import request from "./axios";

export default {
  googleLogin(token) {
    return request({
      url: `/oauth2/code/google`,
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        id_token: token,
      },
    });
  },
};
