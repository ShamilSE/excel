export function root_reducer(state, action) {
    let prevState = state.colState || {}
    switch (action.type) {
        case 'COLUMN_RESIZE':
            prevState = state.colState || {}
            prevState[action.data.id] = action.data.value
            return {...state, colState: prevState}
        default: return state
    }
}