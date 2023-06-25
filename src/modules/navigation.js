
navigation = () => {
    const arrowUp = document.querySelector('.up')


    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop

        if (scrollTop >= 600) {
            arrowUp.style.display = 'block'
        } else arrowUp.style.display = 'none'
    })

    arrowUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })
    
    
    
}

export default navigation