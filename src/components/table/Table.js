import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizer} from "@/components/table/ resizer";

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
            resizer(this.$root, event)
        }
    }
}
