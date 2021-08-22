import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  getUserProfile(user_id) {
    return request({
      url: `/profile/${user_id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getUserMusic(user_id, page) {
    return request({
      url: `/song/profile/${user_id}?page=${page}`,
      method: "get",
    });
  },
  updateProfile(userData) {
    console.log(userData)
    return request({
      url: `/profile`,
      method: "put",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        name: userData.name,
        bio: userData.bio,
        insta: userData.insta,
        facebook: userData.facebook,
        soundcloud: userData.soundclound,
        youtube: userData.youtube,
      },
    });
  },
};
