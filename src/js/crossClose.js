import refs from './refs';

refs.cross.addEventListener('click', onHide, { once: true })
function onHide(e) {
    refs.notification.style.display='none'
}