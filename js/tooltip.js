export default function toolTip() {

    const toolTips = document.querySelectorAll('[data-tooltip]');

    toolTips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = createToolTipBox(this)

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseMove.tooltipBox = tooltipBox;
        onMouseLeave.element = this    
        function onMouseLeave() {
            tooltipBox.remove()
        }

        function onMouseMove() {
            tooltipBox.style.left = event.pageX + 'px'
            tooltipBox.style.top = event.pageY + 'px'
        }
        
        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    }


    function createToolTipBox(element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    
    }

}

