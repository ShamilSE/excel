export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
    }

    select($el) {
        this.removeSelect()
        this.group.push($el)
        $el.addClass(TableSelection.className)
    }

    removeSelect() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        this.group = []
    }

    selectGroup() {

    }
}