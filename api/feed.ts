import request from "./axios";

export default {
  getFeedList() {
    return request({
      method: "get",
      url: `/song/feed?genre=1&page=1&sort=1`,
    });
  },
};
