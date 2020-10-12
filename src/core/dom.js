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

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    addClass(className) {
        this.$el.classList.add(className)
    }

    removeClass(className) {
        this.$el.classList.remove(className)
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            this.$el.style[key] = styles[key]
        })
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
