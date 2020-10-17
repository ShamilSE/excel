import {TABLE_RESIZE} from "@/store/actionTypes";

export function rootReducer(state, action) {
    let prevState = state.colState || {}
    let field = action.data.type == 'column' ? 'colState' : 'rowState'
    // let type = action.data.type
    console.log(action)
    switch (action.type) {
        case TABLE_RESIZE:
            prevState = state.colState || {}
            prevState[action.data.id] = action.data.value
            return {...state, colState: prevState}
        default: return state
    }
}