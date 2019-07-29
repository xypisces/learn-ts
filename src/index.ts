import { AxiosRequestConfig } from "./types/type";
import { xhr } from "./xhr";

function axios(config:AxiosRequestConfig):void {
  // TODO
  xhr(config)
}

export default axios;