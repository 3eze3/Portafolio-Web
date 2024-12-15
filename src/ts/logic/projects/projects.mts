import { genereteTemplateProjects } from './templateProjects.mjs'
export async function displayProjects() {
	const $projectoContainer = document.querySelector(
		'.projects__container-proyects'
	)
	const $projectos = await genereteTemplateProjects()
	$projectoContainer?.appendChild($projectos)
}
