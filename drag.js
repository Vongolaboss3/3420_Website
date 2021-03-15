/*
const position = { x: 0, y: 0 }

//Adds dragging support to elements with the "draggable" class
interact('.draggable').draggable({
	listeners: {
		start (event)
			console.log(event.type, event.target)
	},
	move (event) {
		position.x += event.dx
		position.y += event.dy
		
		event.target.style.transform =
			`translate(${position.x}px, ${position.y}px)`
	},
	end (event) {
	
	}
	}
})

//Adds
function addDraggable(DType, DName, DId)
{
	if (DName === 'Machine')
	{
	
	
	
	}
	
}
*/

// target elements with the "draggable" class
interact('.draggable')
	.draggable({
	// enable inertial throwing
	inertia: true,
	//keep the element within the area of it's parent
	modifiers: [
		interact.modifiers.restrictRect({
			restriction: 'parent',
			endOnly: true
		})
	],
	// enable autoScroll
	autoScroll: true,
	
	listeners: {
		// call this function on every dragmove event
		move: dragMoveListener,
		
		// call this function on every dragend event
		end (event) {
			var textEl = event.target.querySelector('p')
		}
	}
		
	})