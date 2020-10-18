import {ExcelComponent} from '@core/ExcelComponent'
import {createToolbar} from "@/components/toolbar/toolbar.template";
import {$} from "@core/dom";

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options
        })
    }

    toHTML() {
        return createToolbar()
    }

    onClick(event) {
        const button = $(event.target)
        if (button.data.type === 'button') {
            console.log(button.text())
        }
    }
}