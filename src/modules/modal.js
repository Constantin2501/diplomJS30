
const modal = () => {
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const body = document.querySelector('body')


    body.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.classList.contains('modal-close') || !e.target.closest('.modal-callback' )) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }

        if (e.target.classList.contains('modalBtn')  || e.target.classList.contains('button-services')) {
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
    })
    
}

export default modal