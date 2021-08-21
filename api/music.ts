import request from "./axios";

export default {
  getStreaming({ genre, page, sort }) {
    return request({
      url: `/song/stream?genre=${genre}&page=${page}&sort=${sort}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};