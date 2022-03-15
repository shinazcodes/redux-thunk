const initialBgState = 'violet';
//normal reducer
const bgReducer = (state = initialBgState, action: any) => {
    switch (action.type) {
        case 'RED':
            return 'red';
        case 'BLUE':
            return 'blue';
        default:
            return state;
    }
};

export default bgReducer;

// return Object.assign({}, state, {
//     isFetching: true,
//     userData: {},
//     isError: false
// });