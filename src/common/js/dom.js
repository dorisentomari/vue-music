export function hasClass(elem, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(elem.className)
}

export function addClass(elem, className) {
  if (hasClass(elem, className)) {
    return
  }
  let newClass = elem.className.split(' ')
  newClass.push(className)
  elem.className = newClass.join(' ')
}

export function getData(elem, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return elem.setAttribute(name, val)
  } else {
    return elem.getAttribute(name)
  }
}

let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
