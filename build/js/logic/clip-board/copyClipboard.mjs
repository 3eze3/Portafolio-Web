export function copyClipBoard() {
    const $itemEmail = document.querySelector('.contact__item--email');
    const $email = document.querySelector('.contact__social--email');
    $itemEmail?.addEventListener('click', () => {
        if ($email.textContent) {
            writeClipBoard($email.textContent);
            modalCopy();
        }
    });
}
function modalCopy() {
    const $modalEmail = document.querySelector('.modalEmail');
    $modalEmail?.classList.add('modalEmail--active');
    setTimeout(() => $modalEmail?.classList.remove('modalEmail--active'), 2000);
}
async function writeClipBoard(text) {
    try {
        await navigator.clipboard.writeText(text);
    }
    catch (error) {
        console.error(`Error al copiar: ${error}`);
    }
}
