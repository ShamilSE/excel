const CODES = {
    A: 65,
    Z: 90,
}

const DEFAULT_WIDTH_VALUE = "120px"
function getWidth(state, column) {
    return Boolean(state.colState[column]) ? state.colState[column] : DEFAULT_WIDTH_VALUE
}

function createCell(column, row, width) {
    return `
        <div 
            class="cell" 
            contenteditable="" 
            data-column-index="${column}" 
            data-row-index="${row}"
            data-type="cell"
            data-id="${row}:${column}"
            style="width:${width}"
        ></div>
    `
}

function createColumn(columns, index, width) {
    return `
        <div class="column" data-type="resizeble" data-column-index="${index}" style="width:${width}">
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

export function createTable(rowsCount = 5, state) {
    const rows = []
    let columns = []
    // наполнение первой строки
    for (let i = CODES.A; i < CODES.Z +1; i++) {
        const width = getWidth(state, i)
        columns.push(createColumn(String.fromCharCode(i), i, width))
    }
    rows.push(createRow(columns.join('').trim()), null)
    // наполнение последующих строк
    for (let j = 0; j < rowsCount; j++) {
        columns = []
        for (let i = CODES.A; i < CODES.Z +1; i++) {
            const width = getWidth(state, i)
            columns.push(createCell(i, j, width))
        }
        rows.push(createRow(columns.join(''), j + 1))
    }
    return rows.join('')
}