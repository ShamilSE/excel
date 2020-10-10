import {getMethodName} from "@core/getMethodName";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw Error('No $root element provided')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`Please add listener for ${getMethodName(listener)}`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDomListeners() {
        this.listeners.forEach(listener => {
            this.$root.remove(listener, this[getMethodName(listener)].bind(this))
        })
    }
}