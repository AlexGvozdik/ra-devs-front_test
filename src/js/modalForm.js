import refs from './refs';

refs.edit.addEventListener('click', onOpenModalForm)
refs.address.addEventListener('click', onOpenModalForm)
refs.backdropForm.addEventListener('click', onBackdropFormClose)
refs.form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    console.log(e.currentTarget.elements)
}
function onOpenModalForm(e) {
    refs.backdropForm.classList.remove('is-hidden');
    refs.body.classList.add('modal-open');
}

function onBackdropFormClose(e) {
        if (e.target === refs.backdropForm) {
        refs.backdropForm.classList.add('is-hidden');
        refs.body.classList.remove('modal-open');
    }
}
