export function copyClipBoard() {
	const $itemEmail = document.querySelector(
		'.contact__item--email'
	) as HTMLElement
	const $email = document.querySelector(
		'.contact__social--email'
	) as HTMLElement
	$itemEmail?.addEventListener('click', () => {
		if ($email.textContent) {
			writeClipBoard($email.textContent)
			modalCopy()
		}
	})
}

function modalCopy() {
	const $modalEmail = document.querySelector('.modalEmail')
	$modalEmail?.classList.add('modalEmail--active')
	setTimeout(() => $modalEmail?.classList.remove('modalEmail--active'), 2000)
}

async function writeClipBoard(text: string) {
	try {
		await navigator.clipboard.writeText(text)
	} catch (error) {
		console.error(`Error al copiar: ${error}`)
	}
}
