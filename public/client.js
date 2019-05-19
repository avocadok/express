const input = document.querySelector(".message-input")
const button = document.querySelector(".message-send");

const messageListElement =
	document.querySelector(".message-list");

button.addEventListener('click', () => {
	const content = input.value;

	fetch('/api/messages', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			content
		})
	})

})

setInterval(() => {

	fetch('/api/messages')
		.then(response => response.json())
		.then(messageList => {
			const html = messageList.map(msg =>
				`<div class="message">${msg.content}</div>`
			).join('\n');

			messageListElement.innerHTML = html;
		})
}, 1000)
