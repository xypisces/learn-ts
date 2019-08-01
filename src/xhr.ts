import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/type'
import { parseHeaders } from './helpers/header'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const req = new XMLHttpRequest()

    if (responseType) {
      req.responseType = responseType
    }

    req.open(method.toUpperCase(), url, true)

    req.onreadystatechange = function handleLoad() {
      if (req.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeaders(req.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? req.response : req.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: req.status,
        statusText: req.statusText,
        headers: responseHeaders,
        config,
        request: req
      }
      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLocaleLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        req.setRequestHeader(name, headers[name])
      }
    })

    req.send(data)
  })
}
