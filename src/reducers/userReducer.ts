import { DataResponse } from "../models.ts/data-response";

const initialState: dataState = {
    userData: [],
    isFetching: false,
    isError: false
};

export type dataState = {
    userData: DataResponse[];
    isFetching: boolean;
    isError: boolean;
}

// important: intiial state needs to be set otherwise this doesnt work

const userReducer = (state = initialState, action: { payload: dataState, type: string }) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                isFetching: true,
                userData: action.payload.userData,
                isError: false

            };
        case 'FETCHED_DATA':
            return {
                state, ...{
                    userData: action.payload.userData,
                    isFetching: false,
                    isError: false
                }
            }
        case 'ERROR':
            return {
                state, ...{
                    userData: action.payload.userData,
                    isFetching: false,
                    isError: true
                }
            }
        default:
            return state;
    }
};

export default userReducer;