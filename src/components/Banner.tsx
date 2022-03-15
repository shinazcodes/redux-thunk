import classNames from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { RootState } from '../reducers/reducers';

function Banner() {
    //synchronous redux call

    const bg: string = useSelector<RootState, string>((state) => state.bgReducer);
    const classes = classNames('absolute h-1/2 top-0 w-full -z-10',
        bg === 'red' ? 'bg-red-600' : bg === 'blue' ? 'bg-blue-600' : 'bg-violet-600')
    useEffect(() => {
        console.log(bg)
    });

    return (
        <div className={classes}>

        </div >
    );
}

export default Banner;

