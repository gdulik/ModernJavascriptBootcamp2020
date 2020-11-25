// .value, .src, .href, .innerText, .innerHTML, .textContent
const h1 = document.querySelector('h1');
h1.innerText = 'My new webpage';

const uls = document.querySelectorAll('ul');
uls[1].children[0].innerText = 'Not really';

const a = document.querySelector('a');
a.href = 'https://www.google.com';

// getAttribute(), setAttribute()
const range = document.querySelector('input[type="range"]');
range.getAttribute('max');

// .parentElement, .children, .nextElementSibling, .previousElementSibling
// .style, window.getComputedStyle
// .classList.add(), .classList.remove(), .classList.toggle()

// const todo = document.querySelector('#todos .todo');
// todo.classList.add('done');

const btns = document.querySelectorAll('.todo button');
for (let btn of btns) {
	btn.addEventListener('click', () => {
		btn.parentElement.classList.toggle('done');
	});
}

// document.createElement()
// .append(), .prepend(), .appendChild()

const h2 = document.createElement('h2');
h2.append('I am H2');
// document.body.appendChild(h2);
// document.body.prepend(h2);
// document.body.insertBefore(h2, document.querySelector('p'));

// .insertAdjacentElement()
// beforebegin => .insertBefore()
// afterbegin => .prepend()
// beforeend => .append()
// afterend
h1.insertAdjacentElement('afterend', h2);

// .removeChild(), .remove()
const todos = document.querySelector('#todos');
const lastTodo = document.querySelector('li:last-child');
todos.removeChild(lastTodo);

const firstTodo = document.querySelector('li.todo:first-child');
firstTodo.remove();
