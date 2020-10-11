class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(event, callback) {
        this.$el.addEventListener(event, callback)
    }

    remove(event, callback) {
        this.$el.removeEventListener(event, callback)
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }

    get data() {
        return this.$el.dataset
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tag, classes) => {
    const element = document.createElement(tag)
    if (classes) {
        element.classList.add(classes)
    }
    return $(element)
}
