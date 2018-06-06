let total = 1000
let finish = 0

let millisecond = 0
let timer = null
let type = 'normal'

let limit = 5 // finish in ? seconds 

document.querySelector('.btnNormal').addEventListener('click', () => type = 'normal')
document.querySelector('.btnReversal').addEventListener('click', () => type = 'reversal')
document.querySelector('.txtTime').addEventListener('change', (e) => limit = e.target.value)

timer = setInterval(() => start(limit), 50)

/**
 * Start to run animation
 * @param {Number} limit time remain
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
 * @param {Object} element target
 * @param {Number} degree rotate
 */
function run(finish, total) {
  rotate($(".slice1"), caculate(finish, total).first)
  rotate($(".slice2"), caculate(finish, total).second)
  $(".status").html(`${Number.parseFloat(finish / 10).toFixed(0)} % `)
}

/**
 * Run caculateReversal
 * @param {Number} x finish percents
 * @param {Number} all total percents
 */
function runReversal(finish, total) {
  rotate($(".slice1"), caculateReversal(finish, total).first)
  rotate($(".slice2"), caculateReversal(finish, total).second)
  $(".status").html(`${Number.parseFloat(finish / 10).toFixed(0)} % `)
}

/**
 * Set rotate
 * @param {Number} x finish percents
 * @param {Number} all total percents
 */
function rotate(element, degree) {
  element.css({
    '-webkit-transform': 'rotate(' + degree + 'deg)',
    '-moz-transform': 'rotate(' + degree + 'deg)',
    '-ms-transform': 'rotate(' + degree + 'deg)',
    '-o-transform': 'rotate(' + degree + 'deg)',
    'transform': 'rotate(' + degree + 'deg)',
    'zoom': 1
  })
}

/**
 * CaculateReversal rotate
 * @param {Number} x finish percents
 * @param {Number} all total percents
 */
function caculateReversal(x, all) {
  const finish = x
  const total = all
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
 * @param {Number} x finish percents
 * @param {Number} all total percents
 */
function caculate(x, all) {
  let firstHalfAngle = 180
  let secondHalfAngle = 0
  const drawAngle = x / all * 360
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