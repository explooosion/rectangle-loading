// 分子, 分母 => 1/2 = 50%
// 分子, 分母 => 2/3 = 66.6%
let total = 1000
let finish = 0
let millisecond = 0
let timer
let type = 'normal'

const limit = 5 // finish in ? seconds

$(document).ready(function () {

  timer = setInterval(() => auto(limit), 50)

  $('#btnNormal').click(() => type = 'normal')
  $('#btnReversal').click(() => type = 'reversal')

})

function auto(limit) {
  finish = finish + (50 / limit)
  millisecond = millisecond + 50
  if (millisecond >= 1000) {
    millisecond = 0;
    console.log('1 second')
  }
  if (finish >= 1000) {
    finish = 0
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

function run(finish, total) {
  rotate($(".slice1"), caculate(finish, total).first)
  rotate($(".slice2"), caculate(finish, total).second)
  $(".status").html(`${Number.parseFloat(finish / 10).toFixed(0)} % `)
}

function runReversal(finish, total) {
  rotate($(".slice1"), caculateReversal(finish, total).first)
  rotate($(".slice2"), caculateReversal(finish, total).second)
  $(".status").html(`${Number.parseFloat(finish / 10).toFixed(0)} % `)
}

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