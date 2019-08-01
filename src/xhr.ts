import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/type'
import { parseHeaders } from './helpers/header'
import { createError } from './helpers/error';

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const req = new XMLHttpRequest()

    if (responseType) {
      req.responseType = responseType
    }
    if (timeout) {
      req.timeout = timeout
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
      handleResponse(response)
    }

    // 错误处理判断
    req.onerror = function handleError() {
      reject(createError('Network Error', config, null, req))
    }
    req.ontimeout = function handleTimeout() {
      reject(createError(`timeout of ${timeout} Error`, config, 'ECONNABORTED', req))
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLocaleLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        req.setRequestHeader(name, headers[name])
      }
    })

    req.send(data)

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`request failed is ${response.status}`, config, null, req, response))
      }
    }
  })
}

