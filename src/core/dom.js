class Dom {}

export const $ = () => {
    return new Dom()
}

$.create = (tag, classes) => {
    const element = document.createElement(tag)
    if (classes) {
        element.classList.add(classes)
    }
    return element
}