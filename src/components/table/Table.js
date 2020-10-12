import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizer} from "@/components/table/ resizer";
import {TableSelection} from "@/components/table/TableSelection";
import {isCell, shouldResize} from "@/components/table/helpers";
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

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        const $cell = this.$root.find('[data-id="5:65"]')
        this.selection.select($cell)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizer(this.$root, event)
        }

        else if (isCell(event)) {
            const $target = $(event.target)

            this.selection.select($target)
        }
    }
}
