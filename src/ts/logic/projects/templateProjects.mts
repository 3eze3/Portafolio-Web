type Projects = {
	title: string
	image: string
	links: string[]
	technologies: string[]
	date: string
}

async function getProjects(): Promise<Projects[] | undefined> {
	try {
		const response = await fetch(
			'https://raw.githubusercontent.com/3eze3/Portafolio-Web/main/public/projects/projects.json'
		)
		if (!response.ok) {
			throw new Error('Error al cargar los projectos')
		}
		const data: Projects[] = await response.json()
		return data
	} catch (error) {
		console.log('Error al cargar los datos' + error)
	}
}

export async function genereteTemplateProjects() {
	const projectos = await getProjects()
	const $Fragment = new DocumentFragment()
	const classNames = ['card', 'projects__card', 'projects-principal']
	projectos?.forEach((projecto) => {
		const $card = document.createElement('article')
		$card.classList.add(...classNames)
		const { title, image, links, technologies, date } = projecto
		$card.setAttribute('data-technologies', technologies.join(','))
		const [youtbe, github, page] = links
		$card.innerHTML = `
			<a class="card__page-link" target="_blank" href=${page}>
				<img
				 loading="lazy"
				 class="card__img"
				 src=${image}
				 alt="Ilustracion del proyecto" />
			</a>
			<section class="card__content">
			    <div class="card__information">
			        <h3 class="card__title">${title}</h3>
			    </div>
			    <div class="card__box">
			        <div class="card__social">
			            <a aria-label="Video de Youtube del desarrollo del projecto" class="card__link card__link--youtube
						${!youtbe ? 'card__link--youtube--disabled' : ''}"href=${youtbe || '#'}>
							${youtbe ? 'YT video' : 'Video en proceso...'}
		                </a>
		                <a aria-label="Codigo del projecto" class="card__link card__link--github
						${!github ? 'card__link--disabled' : ''} "href=${github || '#'}>
							${github ? 'Github' : 'Repo aun no actulizado'}
		                </a>
			        </div>
							<time class='card__year' datetime=${date}>${date}</time> 
			        
			    </div>
			</section>
		`
		$Fragment.appendChild($card)
	})
	return $Fragment
}
