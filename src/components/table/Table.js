import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizer} from "@/components/table/ resizer";
import {TableSelection} from "@/components/table/TableSelection";
import {isCell, shouldResize, range, findNextCell} from "@/components/table/helpers";
import {$} from "@core/dom";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
        })
    }

    toHTML() {
        return createTable(40)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    selectCell($cell) {
        this.selection.select($cell)
        this.$emit('table:switch_cell', $cell)
    }

    init() {
        super.init()

        this.selectCell(this.$root.find('[data-id="0:65"]'))
        this.$on('formula:input', text => {this.selection.current.text(text)})
        this.$on('formula:done', () => {this.selection.current.focus()})
    }

    onMousedown(event) {
        const $target = $(event.target)
        if (shouldResize(event)) {
            resizer(this.$root, event)
        } else if (isCell(event)) {
            if (event.shiftKey) {
                const startRowAddress = +event.target.dataset.id.split(':')[0]
                const startColumnAddress = +event.target.dataset.id.split(':')[1]

                document.onmouseup = (event) => {
                    const endRowAddress = +event.target.dataset.id.split(':')[0]
                    const endColumnAddress = +event.target.dataset.id.split(':')[1]

                    const columns = range(startColumnAddress, endColumnAddress)
                    const rows = range(startRowAddress, endRowAddress)

                    const selectedCells = columns.reduce((acc, column) => {
                        rows.forEach(row => acc.push(`${row}:${column}`))
                        return acc
                    }, [])

                    const $cells = selectedCells.map(cell => this.$root.find(`[data-id="${cell}"]`))
                    this.selection.selectGroup($cells)
                    document.onmouseup = null
                }
            } else this.selection.select($target)
        }
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        if (keys.includes(event.key) && !event.shiftKey) {
            const {row, column} = this.selection.idParse()
            const $next = this.$root.find(findNextCell(event, {row, column}))

            event.preventDefault()
            this.selectCell($next)
        }
    }

    onInput(event) {this.$emit('table:input', $(event.target))}
}
