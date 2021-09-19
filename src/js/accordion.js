import refs from "./refs";
console.log(refs.arrowUp)
const arrHidden = document.querySelectorAll('.hidden')
const container = refs.accountContainer.classList;
const sidebar = refs.sideBar.classList;
const edit = refs.edit.classList;
console.log(refs.accountContainer)
refs.arrowUp.addEventListener('click', onToggle)
function onToggle() {
    arrHidden.forEach(elem => {
        elem.classList.toggle('hidden')
    })
    sidebar.toggle('high')
    edit.toggle('move')
}