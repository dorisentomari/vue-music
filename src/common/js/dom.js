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
