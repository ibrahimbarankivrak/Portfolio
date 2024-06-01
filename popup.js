const popupTrigger = document.querySelector('#popup-trigger')
const popupContainer = document.querySelector('.popup-container')
const popupClose = document.querySelector('.popup-close')

popupTrigger.addEventListener('click', () => {
    popupContainer.classList.toggle('hidden')
})

popupContainer.addEventListener('click', (evt) => {
    if (evt.target != popupContainer) return;
    popupContainer.classList.add('hidden')
})

popupClose.addEventListener('click', (evt) => {
    popupContainer.classList.add('hidden')
})
