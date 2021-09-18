import refs from './refs';

refs.cross.addEventListener('click', onHide, { once: true })
function onHide(e) {
    console.log('Hide')
    refs.notification.style.display='none'
}