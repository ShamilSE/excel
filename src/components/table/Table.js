import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizer} from "@/components/table/ resizer";
import {TableSelection} from "@/components/table/TableSelection";

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
        if (event.target.dataset.resize) {
            resizer(this.$root, event)
        }
    }
}
