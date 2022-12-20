import axios from "axios";
import showTost from "../utils/ShowTost";

const res = axios.create();
res.interceptors.response.use(function ({ data }) {
  if (data.code != 0) {
    showTost({
      content: data.msg,
      type: "error",
    });
    return;
  }
  return data.data;
});
export default res;
