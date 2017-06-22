'use strict'

let unselectable = require('./')

let el = document.body.appendChild(document.createElement('div'))
el.style.outline = '1px solid gray'
el.style.height = '40px'
el.innerHTML = 'xxx123'


let btn = document.body.appendChild(document.createElement('button'))
btn.innerHTML = 'Make unselectable'
btn.style.marginTop = '10px'

var reset
btn.onclick = function () {
    if (!reset) {
        btn.innerHTML = 'Reset unselectable'
        reset = unselectable(el)
    }
    else {
        btn.innerHTML = 'Make unselectable'
        reset(el)
        reset = null
    }
}
