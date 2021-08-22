import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  getMyProfile() {
    return request({
      url: `/profile`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getUserProfile(user_id) {
    return request({
      url: `/profile/${user_id}`,
      method:"get"
    });
  },
};
