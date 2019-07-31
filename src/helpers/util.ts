const fnString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return fnString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
