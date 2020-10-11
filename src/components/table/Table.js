import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {$} from "@core/dom";

export class Table extends ExcelComponent {
    static className = 'excel__table'


    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(40)
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $target = $(event.target)
            const $parent = $target.closest('[data-type="resizeble"]')
            const coords = $parent.getCoords()
            const cells = this.$root.findAll(`[data-column-index="${$parent.data.columnIndex}"]`)

            document.onmousemove = e => {
                if (event.target.dataset.resize == 'column') {
                    const delta = e.pageX - coords.right
                    const value = coords.width + delta + 'px'
                    $parent.$el.style.width = value
                    cells.forEach(el => el.style.width = value)
                } else {
                    const delta = e.pageY - coords.bottom
                    const value = coords.height + delta + 'px'
                    $parent.$el.style.height = value
                }
            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
