
const modal = () => {
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalBtn = document.querySelector('.modalBtn')


    modalBtn.addEventListener('click', () => {
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })

}

export default modal