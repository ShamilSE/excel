import {$} from "@core/dom";

export function resizer($root, event) {
    return new Promise( resolve => {
        const $resizer = $(event.target)
        const $parent = $resizer.closest('[data-type="resizeble"]')
        const coords = $parent.getCoords()
        const cells = $root.findAll(`[data-column-index="${$parent.data.columnIndex}"]`)
        const type = event.target.dataset.resize
        let value

        document.onmousemove = e => {
            $resizer.css({
                opacity: 1,
            })

            if (type === 'column') {
                const delta = e.pageX - coords.right
                value = coords.width + delta + 'px'
                $resizer.css({
                    right: -delta + 'px',
                    bottom: '-2000px',
                })
            } else {
                const delta = e.pageY - coords.bottom
                value = coords.height + delta + 'px'
                $resizer.css({
                    bottom: -
                        delta + 'px',
                    right: '-2000px'
                })
            }
        }

        document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null

            if (type === 'column') {
                $parent.css({width: value})
                cells.forEach(el => el.style.width = value)
            } else {
                $parent.css({height: value})
            }

            resolve({
                value,
                type,
                id: type === 'column' ? $parent.data.columnIndex : $parent.data.rowIndex
            })

            $resizer.css({
                opacity: 0,
                bottom: 0,
                right: 0
            })
        }
    })
}