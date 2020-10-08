export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw Error('No $root element provided')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        console.log(this.listeners)
    }

    removeDomListeners() {}
}