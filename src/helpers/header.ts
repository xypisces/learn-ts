import { isPlainObject } from './util'

// 改变content-type大小写
function changeHeaderName(headers: any, headerName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== headerName && name.toUpperCase() === headerName.toUpperCase()) {
      headers[headerName] = headers[name]
      delete headers[name]
    }
  })
}

// 给content-type赋值
export function processHeaders(headers: any, data: any): any {
  changeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

// 将headers转换成对象
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLocaleLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
