export const changeToRed = () => {
    return {
        type: 'RED'
    };
};

export const changeToBlue = () => {
    return {
        type: 'BLUE'
    };
};

export const fetchDataAction = (data: any, actionType: 'FETCH_DATA' | 'FETCHED_DATA' | 'ERROR') => {
    return {
        type: actionType,
        payload: {
            userData: data,
        }
    };
};


// asynchronous call and dispatch to store
export const fetchData = () =>
    async (dispatch: any, _: any) => {
        try {
            dispatch(fetchDataAction({}, 'FETCH_DATA'))

            let data = await fetch('https://jsonplaceholder.typicode.com/todos')
            const res = await data.json();
            console.log(res)
            if (res) {
                dispatch(fetchDataAction(res, 'FETCHED_DATA'))

            } else {
                dispatch(fetchDataAction(res, 'ERROR'))
            }
        } catch (err) {
            dispatch(fetchDataAction(null, 'ERROR'))

        }

    };
