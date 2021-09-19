import refs from "./refs";
const arrHidden = document.querySelectorAll('.hidden')
const sidebar = refs.sideBar.classList;
const edit = refs.edit.classList;
refs.arrowUp.addEventListener('click', onToggle)
function onToggle() {
    arrHidden.forEach(elem => {
        elem.classList.toggle('hidden')
    })
    refs.sideBar.classList.toggle('high')
    refs.edit.classList.toggle('move')
}