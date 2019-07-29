import { AxiosRequestConfig } from "./types/type";

export function xhr(config:AxiosRequestConfig):void {
  // TODO
  const { data = null, url, method = 'get' } = config

  const req = new XMLHttpRequest()

  req.open(method.toUpperCase(), url, true)

  req.send(data)
}