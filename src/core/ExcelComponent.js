import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.observer = options.observer
        this.prepare()
    }

    prepare() {}

    toHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }

    remove() {
        this.removeDomListeners()
    }
}