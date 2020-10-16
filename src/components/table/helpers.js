export function shouldResize(event) {
    return event.target.dataset.resize
}

export function isCell(event) {
    return event.target.dataset.type === 'cell'
}

export function range(start, end) {
    if (start > end) {
        [start, end] = [end, start]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => start + index)
}

export function findNextCell(event, {row, column}) {
    const MIN_ROW = 0
    const MIN_COLUMN = 65
    switch(event.key) {
        case "Tab":
        case "ArrowRight":
            column++
            break
        case "Enter":
        case "ArrowDown":
            row++
            break
        case "ArrowLeft":
            column - 1 >= MIN_COLUMN ? column-- : column
            break
        case "ArrowUp":
            row - 1 >= MIN_ROW ? row-- : row
    }
    return `[data-id="${row}:${column}"]`
}

export function storage(key, data = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key))
    }
    localStorage.setItem(key, JSON.stringify(data))
}