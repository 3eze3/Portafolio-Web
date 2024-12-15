const handleMove = (card: HTMLElement, e: MouseEvent) => {
	const { offsetWidth: width, offsetHeight: height } = card
	const { offsetX: x, offsetY: y } = e
	const moveX = (x / width) * 25 - 15
	const moveY = (y / height) * 25 - 15
	card.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg)`
}

const resetStyle = (card: HTMLElement) => {
	card.style.transform = `rotateX(0deg) rotateY(0deg)`
}

export function tiltEfect() {
	document.addEventListener("DOMContentLoaded", () => {
		setTimeout(() => {
			const $cards = document.querySelectorAll(
				".card"
			) as NodeListOf<HTMLElement>
			$cards.forEach((card) => {
				card.addEventListener("mousemove", (e) => handleMove(card, e))
				card.addEventListener("mouseleave", () => resetStyle(card))
			})
		}, 500)
	})
}