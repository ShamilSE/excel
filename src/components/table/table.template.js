const CODES = {
    A: 65,
    Z: 90,
}

function createCell(index) {
    return `
        <div class="cell" contenteditable="" data-column-index="${index}"></div>
    `
}

function createColumn(columns, index) {
    return `
        <div class="column" data-type="resizeble" data-column-index="${index}">
            ${columns}
            <div class="col-resize" data-resize="column"></div>
        </div>
    `
}

function createRow(content, index = '') {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
        <div class="row" data-type="resizeble">
            <div class="row-info">
                ${index}
                ${resize}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

export function createTable(rowsCount = 5) {
    const rows = []
    let columns = []
    // наполнение первой строки
    for (let i = CODES.A; i < CODES.Z +1; i++) {
        columns.push(createColumn(String.fromCharCode(i), i))
    }
    rows.push(createRow(columns.join('').trim()), null)
    // наполнение последующих строк
    for (let i = 0; i < rowsCount; i++) {
        columns = []
        for (let i = CODES.A; i < CODES.Z +1; i++) {
            columns.push(createCell(i))
        }
        rows.push(createRow(columns.join(''), i + 1))
    }
    return rows.join('')
}