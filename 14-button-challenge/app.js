const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
	const topRand = Math.floor(Math.random() * window.innerHeight);
	const leftRand = Math.floor(Math.random() * window.innerWidth);
	btn.style.top = `${topRand}px`;
	btn.style.left = `${leftRand}px`;
});

btn.addEventListener('click', () => {
	btn.innerText = 'You Got Me!';
	document.body.style.backgroundColor = 'green';
});
