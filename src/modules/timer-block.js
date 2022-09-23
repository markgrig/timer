import * as  DateUtil from '../core/utile'
export class TimerBlock {
    #date
    #timerContaner
    #timerTextHtml

    constructor( date ) {
        this.#date = date
        this.#timerContaner = document.createElement("div")
        this.#timerContaner.className = "timer-container"
        this.#timerTextHtml = document.createElement("p")
    }

    #getTimerContent() {
        return DateUtil.getPriceseDate( this.#date , new Date())
    }
    
    #enableDateUpdate() {
        setInterval( () => { 
            this.#timerTextHtml.textContent = this.#getTimerContent()
        })
    }
    render() {
        const foundedText = document.createElement("p")
        foundedText.textContent = "С момента создания JS прошло"
        foundedText.className = "founded-text"

        this.#timerContaner.id = 'timer'
        this.#timerTextHtml.className = "timer-text"
        this.#timerTextHtml.textContent = this.#getTimerContent()
        this.#enableDateUpdate()

        const todayDateElement = document.createElement("div")
        todayDateElement.className =  "timer-text"
        const todayDate  = DateUtil.getElementDate( new Date())
        todayDateElement.textContent = `(Сегодня ${todayDate})`

        this.#timerContaner.append( foundedText, this.#timerTextHtml, todayDateElement )

        return this.#timerContaner
    }
}   