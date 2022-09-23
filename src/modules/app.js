import { JSBlock } from './js-block'
import { TimerBlock } from './timer-block'
import { JS_CREATION_DATE } from '../constance/settings'

export class App {
    constructor() {
        this.JSBlock = new JSBlock()
        this.TimerBlock = new TimerBlock( JS_CREATION_DATE)
    }
    run() {
        const JSBlockElement = this.JSBlock.render()
        const TimerBlockElement = this.TimerBlock.render()
        document.body.append( JSBlockElement,  TimerBlockElement )
        
    }
}

