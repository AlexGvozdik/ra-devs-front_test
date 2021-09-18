import refs from './refs';

refs.openModalBtn.addEventListener('click', onOpenModalLog)
refs.backdrop.addEventListener('click', onBackdropLogClose)

function onOpenModalLog(e) {
    refs.backdrop.classList.remove('is-hidden');
    refs.body.classList.add('modal-open');
}

function onBackdropLogClose(e) {
    if (e.target === refs.backdrop) {
        refs.backdrop.classList.add('is-hidden');
        refs.body.classList.remove('modal-open');
    }
}


