export function create_store(rootReducer, initialState = {}) {
    let state = rootReducer({...initialState}, {type: '__INIT__'})
    const listeners = []

    return {
        subscribe(fn) {
            listeners.push(fn)
            return listeners.filter(listener => fn !== listener)
        },
        dispatch(action) {
            state = rootReducer(state, action)
            listeners.forEach(listener => listener(state))
        },
        getState() {
            return state
        },
    }
}
