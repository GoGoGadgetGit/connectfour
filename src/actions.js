export function dropChecker(column) {
    return {
        type: 'PLACEDROP',
        payload: column
    };
}