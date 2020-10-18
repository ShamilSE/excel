function toButton(element) {
    const meta = `
        data-type="button"
        data-value='${JSON.stringify(element.value)}'
    `
    return `
        <div class="button ${element.active ? 'active' : ''}" ${meta}>
            <i ${meta} class="material-icons">${element.icon}</i>
        </div>
    `
}

export function createToolbar() {
    const toolbarElements = [
        {
            icon: 'format_align_left',
            active: false,
            value: {textAlign: 'left'}
        },
        {
            icon: 'format_align_center',
            active: false,
            value: {textAlign: 'center'}
        },
        {
            icon: 'format_align_right',
            active: false,
            value: {textAlign: 'right'}
        },
        {
            icon: 'format_bold',
            active: false,
            value: {fontWeight: 'bold'}
        },
        {
            icon: 'format_italic',
            active: false,
            value: {fontStyle: 'italic'}
        },
        {
            icon: 'format_underlined',
            active: false,
            value: {textDecoration: 'underline'}
        },
    ]
    return toolbarElements.map(toButton).join('')
}



