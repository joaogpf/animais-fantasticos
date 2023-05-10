export default function smoothScroll() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
      //  window.scrollTo({
         //   top: topo,
         //   behavior: 'smooth'
       // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
