const btn = document.querySelector('#clicker');

btn.addEventListener('click', () => {
	console.log('Button pressed');
});

btn.addEventListener('mouseover', () => {
	btn.innerText = 'Stop touching me';
});

btn.addEventListener('mouseout', () => {
	btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', () => {
	console.log('Stop scrolling!');
});
