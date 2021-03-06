let total = 1000
let finish = 0

let millisecond = 0
let timer = null
let type = 'normal'

let limit = 5 // during(sec) 

const slice1 = document.querySelector('.slice1')
const slice2 = document.querySelector('.slice2')
const status = document.querySelector('.status')

document.querySelector('.btnNormal').addEventListener('click', () => type = 'normal')
document.querySelector('.btnReversal').addEventListener('click', () => type = 'reversal')
document.querySelector('.txtTime').addEventListener('change', (e) => limit = e.target.value)

timer = setInterval(() => start(limit), 50)

/**
 * Start to run animation
 * @param {Number} time during
 */
function start(limit) {
  finish = finish + (50 / limit)
  millisecond = millisecond + 50
  if (millisecond >= 1000) {
    millisecond = 0;
    console.log('1 second')
  }
  if (finish >= 1000) {
    finish = 0
    // repeat or not
    // clearInterval(timer) 
  }
  switch (type) {
    case 'normal':
      run(finish, total)
      break
    case 'reversal':
      runReversal(finish, total)
      break
    default:
      run(finish, total)
  }
}

/**
 * Run caculate
 * @param {Number} finish finish percents
 * @param {Number} total total percents
 */
function run(finish, total) {
  rotate(slice1, caculate(finish, total).first)
  rotate(slice2, caculate(finish, total).second)
  status.innerHTML = `${Number.parseFloat(finish / 10).toFixed(0)} % `
}

/**
 * Run caculateReversal
 * @param {Number} finish finish percents
 * @param {Number} total total percents
 */
function runReversal(finish, total) {
  rotate(slice1, caculateReversal(finish, total).first)
  rotate(slice2, caculateReversal(finish, total).second)
  status.innerHTML = `${Number.parseFloat(finish / 10).toFixed(0)} % `
}

/**
 * Set rotate
 * @param {Object} element target element
 * @param {Number} degree rotate
 */
function rotate(element, degree) {
  element.setAttribute('style', `
    -webkit-transform: rotate(${degree}deg);
    -moz-transform: rotate(${degree}degg);
    -ms-transform: rotate(${degree}deg);
    -o-transform: rotate(${degree}deg);
    transform: rotate(${degree}deg);
    zoom: 1;`
  )
}

/**
 * CaculateReversal rotate
 * @param {Number} finish finish percents
 * @param {Number} total total percents
 */
function caculateReversal(finish, total) {
  const remain = total - finish
  let firstHalfAngle = 0
  let secondHalfAngle = 180
  const drawAngle = remain / total * 360
  if (drawAngle >= 180) {
    firstHalfAngle = (drawAngle - 180) * -1
  } else {
    secondHalfAngle = drawAngle * -1
  }
  return {
    first: firstHalfAngle,
    second: secondHalfAngle,
  }
}

/**
 * Caculate rotate
 * @param {Number} finish finish percents
 * @param {Number} total total percents
 */
function caculate(finish, total) {
  let firstHalfAngle = 180
  let secondHalfAngle = 0
  const drawAngle = finish / total * 360
  if (drawAngle <= 180) {
    firstHalfAngle = drawAngle
  } else {
    secondHalfAngle = drawAngle - 180
  }
  return {
    first: firstHalfAngle,
    second: secondHalfAngle,
  }
}