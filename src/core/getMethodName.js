export function getMethodName(listener) {
    return listener ? `on${listener.charAt(0).toUpperCase()}${listener.slice(1)}` : ''
}
