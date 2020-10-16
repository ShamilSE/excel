import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.observer = options.observer
        this.store = options.store
        this.unsubscribers = []
        this.storeSub = null
        this.prepare()
    }

    $emit(event, ...args) {
        this.observer.emit(event, ...args)
    }

    $on(event, fn) {
        const unsub = this.observer.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    $subscribe(fn) {
        this.storeSub = this.store.subscribe(fn)
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
        this.storeSub.forEach(unsub => unsub())
    }
}