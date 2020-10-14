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
            listeners: ['mousedown', 'keydown'],
            ...options
        })
    }

    toHTML() {
        return createTable(40)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        const $cell = this.$root.find('[data-id="0:65"]')
        this.selection.select($cell)

        this.observer.subscribe('formula:input', text => {
            console.log('text', text)
        })
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
            event.preventDefault()

            const {row, column} = this.selection.idParse()
            const nextCell = this.$root.find(findNextCell(event, {row, column}))
            this.selection.select(nextCell)
        }
    }
}
