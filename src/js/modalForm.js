import refs from './refs';
import { error, success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

refs.edit.addEventListener('click', onOpenModalForm)
refs.address.addEventListener('click', onOpenModalForm)
refs.backdropForm.addEventListener('click', onBackdropFormClose)
refs.form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    let valuesArr = []
    const realArr = Array.from(e.currentTarget.elements)
    const inputsArr = realArr.filter(elem => {
        if (elem.nodeName !== 'BUTTON') {
            valuesArr.push(elem.value)
        }
    })
    if (valuesArr.includes('')) {
        error({ delay: 2500, text: 'All fields are required to fill' });
        return false;
    }
    realArr.forEach(elem => elem.value = '')
    refs.backdropForm.classList.add('is-hidden');
    refs.body.classList.remove('modal-open');
    success({ delay: 2500, text: 'Your personal information has been saved' });
    
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
