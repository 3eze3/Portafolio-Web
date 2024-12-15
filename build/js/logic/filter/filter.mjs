function filterProjects(list_filter_tech) {
    const $projectos = document.querySelectorAll('.projects-principal');
    $projectos.forEach((projecto) => {
        const tecnologies = projecto.getAttribute('data-technologies');
        const projectTech = tecnologies ? tecnologies.split(',') : [];
        const match = list_filter_tech.every((tech) => projectTech.includes(tech));
        if (match) {
            projecto.classList.remove('card__hidden');
        }
        else {
            projecto.classList.add('card__hidden');
        }
    });
}
function updateTechFilter(e, list_filter_tech) {
    const $inputs = document.querySelectorAll('.filter__technology-input');
    const input = e.target;
    const tech = input.value;
    if (tech === 'all' && input.checked) {
        list_filter_tech.length = 0;
        $inputs.forEach((input) => {
            if (input.id !== 'all')
                input.checked = false;
        });
        input.checked = false;
    }
    if (input.checked && tech != 'all') {
        if (!list_filter_tech.includes(tech))
            list_filter_tech.push(tech);
    }
    else {
        const index = list_filter_tech.indexOf(tech);
        if (index !== -1) {
            list_filter_tech.splice(index, 1);
        }
    }
}
export function filtertech() {
    const $form = document.querySelector('.filter');
    const list_filter_tech = [];
    $form.addEventListener('change', (e) => {
        updateTechFilter(e, list_filter_tech);
        filterProjects(list_filter_tech);
    });
}
