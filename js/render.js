function render (oldState, newState) {
	const html = `State was:
		<pre>${JSON.stringify(oldState, null, 2)}</pre>
	Now is:
		<pre>${JSON.stringify(newState, null, 2)}</pre>
	`;

	document.body.innerHTML = html;
}

export { render };
