import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action';
import '../App.css';
import { RootState } from '../reducers/reducers';
import { dataState } from '../reducers/userReducer';

function AsyncDataComponent() {
    const dispatch = useDispatch();
    const data = useSelector<RootState, dataState>((state) =>
        state.userReducer
    )
    function clickedButton() {
        dispatch(fetchData())
    }

    return (
        <div className="">
            <button className='btn primary h-fit' onClick={() => clickedButton()} >get async data</button>
            {data.isFetching ? <div>loading data...</div> :
                <ul className="scrollable-container">
                    {data.userData.map((ele) => {

                        return <li className='font-bold ml-3'>
                            {"=> " + ele.title}
                        </li>

                    })}
                </ul>
            }
        </div>
    );
}

export default AsyncDataComponent;

