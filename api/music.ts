import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

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
  getMusicDetail(id) {
    return request({
      url: `/song/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getMusicComment(id) {
    return request({
      url: `/comment/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  sendComment(id, content) {
    return request({
      url: `/comment`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: parseInt(id),
        content: content,
      },
    });
  },
};
