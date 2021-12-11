window.onload = () => {
    const listOfElements = [].map.bind(document.querySelector('.ul').children)(el => el)
    document.querySelector('#input').oninput = function () {
        filter(this.value)
    }

    function filter(value) {
        listOfElements.map(element => {
            if (!element.innerText.toLowerCase().includes(value)) {
                element.classList.add('hide')
            } else {
                element.classList.remove('hide')
            }
        })
    }

}