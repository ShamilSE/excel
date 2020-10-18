export function rootReducer(state, action) {
    let field
    let prevState
    switch (action.type) {
        case 'COLUMN_RESIZE':
            field = action.data.type === 'column' ? 'colState' : 'rowState'
            prevState = state[field] || {}
            prevState[action.data.id] = action.data.value
            return {...state, [field]: prevState}
        default: return state
    }
}