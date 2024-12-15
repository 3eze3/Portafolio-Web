async function loadLanguage(selectedLanguage: string) {
	try {
		const ENTRY_POINT_DATA_LANGUAGE = `/languaje/${selectedLanguage}.json`
		const response = await fetch(`${ENTRY_POINT_DATA_LANGUAGE}`)
		const language = await response.json()
		updateContent(language)
	} catch (error) {
		console.error(
			`Error al momento de obtener los json de los lenguajes${error}`
		)
	}
}

function updateContent(language: { [x: string]: any }) {
	document.querySelectorAll('[data-section]').forEach((element) => {
		const section = element.getAttribute('data-section')
		const value = element.getAttribute('data-value')
		if (section && value) {
			if (language[section] && language[section][value]) {
				element.innerHTML = language[section][value]
			} else {
				console.warn('No se encontro la traduccion definia en el json! :(')
			}
		} else {
			console.warn("Nose se encuantra el '[data-section] y el '[data-value]'")
		}
	})
}

function loadLangFromLocalStorage() {
	const saveLang = window.localStorage.getItem('lang') || 'es-la'
	const optionSelected = document.querySelector(
		`.header__language-option[value="${saveLang}"]`
	) as HTMLOptionElement
	if (optionSelected) {
		optionSelected.selected = true
	}
	loadLanguage(saveLang)
}

function saveLang(selectedLanguage: string) {
	window.localStorage.setItem('lang', selectedLanguage)
}

export function switchLanguage() {
	const $language = document.querySelector('.header__language')
	$language?.addEventListener('change', (e) => {
		const target = e.target as HTMLOptionElement
		const selectedLanguage = target.value // es-ls / en
		loadLanguage(selectedLanguage)
		saveLang(selectedLanguage)
	})
}

loadLangFromLocalStorage()
