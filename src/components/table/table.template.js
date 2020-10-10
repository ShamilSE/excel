const CODES = {
    A: 65,
    Z: 90,
}

function createCell() {
    return `
        <div class="cell" contenteditable=""></div>
    `
}

function createColumn(columns) {
    return `

        <div class="column">
            ${columns}
            <div class="col-resize"></div>
        </div>
    `
}

function createRow(content, index = '') {
    return `
        <div class="row">
            <div class="row-info">
                ${index}
                <div class="row-resize"></div>
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

export function createTable(rowsCount = 5) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    let columns = []
    // наполнение первой строки
    for (let i = CODES.A; i < CODES.Z +1; i++) {
        columns.push(createColumn(String.fromCharCode(i)))
    }
    rows.push(createRow(columns.join('').trim()))
    // наполнение последующих строк
    for (let i = 0; i < rowsCount; i++) {
        columns = []
        for (let i = 0; i < colsCount; i++) {
            columns.push(createCell())
        }
        rows.push(createRow(columns.join(''), i + 1))
    }
    return rows.join('')
}