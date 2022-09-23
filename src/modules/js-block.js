import JS_IMAGE from '../../assets/js.png'
export class JSBlock {
    #container 

    constructor() {
        this.#container = document.createElement('div')
        this.#container.className = "js-block"

    }
    render() {
        const mainTitle = document.createElement('h1')
        mainTitle.className = "main-title"
        mainTitle.textContent = "Java-script"

        const JSTangleHTML = document.createElement('img')
        JSTangleHTML.className = "js-image"
        JSTangleHTML.src = JS_IMAGE

        this.#container.append( mainTitle, JSTangleHTML)
        return this.#container
    }

}