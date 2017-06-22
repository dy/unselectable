/**
 * Turn selectable on or off for an element
 *
 * @module  unselectable
 */

'use strict'


module.exports = function unselect (el) {
	var userSelect = el.style.userSelect || el.style.WebkitUserSelect || el.style.MozUserSelect || el.style.msUserSelect
	var userDrag = el.style.userDrag
	var touchCallout = el.style.touchCallout
	var cursor = el.style.cursor
	var attr = el.getAttribute('unselectable')

	el.style.userSelect = 'none'
	el.style.WebkitUserSelect = 'none'
	el.style.MozUserSelect = 'none'
	el.style.msUserSelect = 'none'
	el.style.userDrag = 'none'
	el.style.touchCallout = 'none'
	el.style.cursor = 'default'
	el.setAttribute('unselectable', 'on')
	el.addEventListener('selectstart', pd)

	return reset

	function reset (el) {
		el.style.cursor = cursor ? cursor : null
		el.style.userSelect = userSelect && userSelect != 'none' ? userSelect : null
		el.style.userDrag = userDrag && userDrag != 'none' ? userDrag : null
		el.style.touchCallout = touchCallout && touchCallout != 'none' ? touchCallout : null

		if (attr) {
			el.setAttribute('unselectable', attr)
		}
		else {
			el.removeAttribute('unselectable')
		}

		el.removeEventListener('selectstart', pd)
	}

	function pd (e) {
		e.preventDefault()
	}
}
