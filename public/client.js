const input = document.querySelector(".message-input")
const button = document.querySelector(".message-send");

const messageListElement =
	document.querySelector(".message-list");

const authorInput = document.querySelector(".message-author");

button.addEventListener('click', () => {
	const content = input.value;
	const author = authorInput.value;

	fetch('/api/messages', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			content,
			author
		})
	})

})

setInterval(() => {

	fetch('/api/messages')
		.then(response => response.json())
		.then(messageList => {
			const html = messageList.map(msg =>
				`
				<div class="message">
					<span class="author">${msg.author}</span>
					<span class="date">${msg.date}</span>:
					${msg.content}
				</div>
				`
			).join('\n');

			messageListElement.innerHTML = html;
		})
}, 1000)
