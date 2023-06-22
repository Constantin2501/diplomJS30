
const modal = () => {
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalBtn = document.querySelector('.modalBtn')


    modalBtn.addEventListener('click', () => {
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })

    modalCallback.addEventListener('click', (e) => {
        if (!e.target.closest('.modal-callback') || e.target.classList.contains('modal-close')) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    })
}

export default modal