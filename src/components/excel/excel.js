import {$} from "@core/dom";

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        // создаем корневой див
        const $root = $.create('div', 'excel')
        this.components.forEach(Component => {
            const $el = $.create('div', Component.className)
            // добавляем елемент в корневой див
            const component = new Component($el)
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        console.log(this.components)
    }
}