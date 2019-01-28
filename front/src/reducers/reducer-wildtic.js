function getInitialState() {
    return {};
}
export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'POST_API':
            return action.payload;
        default:
            return state
    }
}