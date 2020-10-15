import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.observer = options.observer
        this.unsubscribers = []
        this.prepare()
    }

    $emit(event, ...args) {
        this.observer.emit(event, ...args)
    }

    $on(event, fn) {
        const unsub = this.observer.subscribe(event, fn)
        this.unsubscribers.push(unsub)
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
        this.unsubscribers.forEach(unsub => unsub())
    }
}