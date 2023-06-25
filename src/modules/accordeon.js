
const accordeon = () => {
    const element = document.querySelectorAll('.accordeon .element')
    

    element.forEach(elem => {

        elem.addEventListener('click', (e) => {
            let elemActive = document.querySelectorAll('.accordeon .element.active')
            let elemContent = document.querySelectorAll('.accordeon .element-content')


            if (!e.target.parentNode.classList.contains('active')) {
                e.target.parentNode.classList.add('active')
            } else e.target.parentNode.classList.remove('active')

            elemActive.forEach(elem => {
                elem.classList.remove('active')
            })

            elemContent.forEach(elem => {
                if (elem.closest('.element.active')) {
                    elem.style.display = 'block'
                } else elem.style.display = 'none'
            })

        })
    })

}

export default accordeon