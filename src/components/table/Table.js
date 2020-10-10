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
            document.onmousemove = e => {
                const delta = e.pageX - coords.right
                $parent.$el.style.width = coords.width + delta + 'px'
            }
        }
    }
}
