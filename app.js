const scroll = () => {
    let scrollBody = document.querySelector('.scrollBody')
    const scrollToLeft = document.querySelector('.scrollToLeft').addEventListener('click', () => {
        scrollBody.style.left = 0
    })
    const scrollToRight = document.querySelector('.scrollToRight').addEventListener('click', () => {
        scrollBody.style.left = '-1000px'
    })

    scrollToLeft()
    scrollToRight()
}
scroll()