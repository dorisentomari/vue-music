import originJSONP from 'jsonp'

/***
 * 封装的JSONP方法
 * @param url 一个比较干净的url地址
 * @param data url地址需要额各种参数，都用data来展示
 * @param option 对应jsonp库中的option
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param((data))
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(data);
      }
    })
  })
}

function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
