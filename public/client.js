const input = document.querySelector(".message-input")
const button = document.querySelector(".message-send");

const messageListElement =
	document.querySelector(".message-list");

const authorInput = document.querySelector(".message-author");

function sendMessage() {
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

	input.value = '';
}

button.addEventListener('click', sendMessage)

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		sendMessage()
	}
})

setInterval(() => {
	fetch('/api/messages')
		.then(response => response.json())
		.then(messageList => {
			const html = messageList.map(msg =>
				`
				<div class="message">
					<span class="date">(${msg.date})</span>
					<span class="author">${msg.author}</span>:
					${msg.content}
				</div>
				`
			).join('\n');

			messageListElement.innerHTML = html;
			messageListElement.scrollTop = messageListElement.scrollHeight;
		})
}, 1000)
