export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.removeSelect()
        this.group.push($el)
        $el.focus().addClass(TableSelection.className)
        this.current = $el
    }

    selectGroup($cells) {
        this.removeSelect()
        $cells.forEach(cell => this.group.push(cell))
        this.group.forEach(cell => cell.addClass(TableSelection.className))
    }

    idParse() {
        const row = this.current.$el.dataset.rowIndex
        const column = this.current.$el.dataset.columnIndex
        return {row, column}
    }

    removeSelect() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        this.group = []
    }
}