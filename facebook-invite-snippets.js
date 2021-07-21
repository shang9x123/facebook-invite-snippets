
// Execute every snippet into Console

// Common functions
function autoscroll() {
	try {
		var scrollBox = Array.from( document.querySelectorAll('[role="dialog"] [role="progressbar"][data-visualcompletion="loading-state"]') ).pop().parentNode.parentNode.parentNode.parentNode
	} catch(e) {
		alert('unidentified box to scroll')
		return
	}
	window.job = setInterval(() => {
		if(scrollBox.offsetHeight + scrollBox.scrollTop == scrollBox.scrollHeight) {
			return
		}
		scrollBox.scrollTo(0, scrollBox.scrollHeight)
		if(document.querySelector('[role="dialog"] [role="progressbar"][data-visualcompletion="loading-state"]')) {
			// keep scrolling
			return
		}
		clearInterval( window.job )
		setTimeout(() => alert('Scrolling complete.'), 1 * 1000)
	}, 100)
}
function stopAutoscroll() {
	clearInterval( window.job )
}

// Group
autoscroll()
Array.from( document.querySelectorAll('[role="dialog"] [aria-checked="false"]:not([aria-disabled="true"])') ).forEach( e => e.click() )

// Post
autoscroll()
Array.from( document.querySelectorAll('[role="dialog"] [role="button"]:not([aria-disabled="true"])[aria-label="Invita"]') ).forEach( e => e.click() )

// Stop Scrolling
stopAutoscroll()
