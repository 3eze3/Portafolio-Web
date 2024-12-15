export function slide() {
	const prev_btn = document.querySelector(
		'.live__btn-prev'
	) as HTMLButtonElement
	const next_btn = document.querySelector(
		'.live__btn-next'
	) as HTMLButtonElement
	const containerSlide = document.querySelector(
		'.live__container'
	) as HTMLElement
	const slides = document.querySelectorAll('.live__card')
	const totalSlides = slides.length // Guardamos el total de slides para evitar recalcularlo

	let index = 0

	const updateSlide = () => {
		if (index >= totalSlides) {
			index = 0 // Si llegamos al final, volvemos al primero
		}

		if (index < 0) {
			index = totalSlides - 1 // Si retrocedemos antes del primer slide, vamos al último
		}

		containerSlide.style.transform = `translateX(-${index * 100}%)` // Movimiento del slider
	}

	// Configuración de los botones de navegación
	const handlePrevClick = () => {
		index--
		updateSlide()
	}

	const handleNextClick = () => {
		index++
		updateSlide()
	}

	// Asignamos los eventos
	prev_btn.addEventListener('click', handlePrevClick)
	next_btn.addEventListener('click', handleNextClick)

	// Inicialización
	updateSlide()
}

slide()
