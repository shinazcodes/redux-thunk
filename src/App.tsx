import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { changeToBlue, changeToRed } from './action';
import './App.css';
import AsyncDataComponent from './components/AsyncDataComponent';
import Banner from './components/Banner';
import userReducer from './reducers/bgReducer';

function App() {
  const dispatch = useDispatch();
  function clickedButton(type: string) {
    dispatch(type === 'red' ? changeToRed() : changeToBlue())
  }

  return (
    <div className="h-screen flex-row flex flex-wrap place-content-center">
      <div className="w-full h-1/2">
        <h1 className='font-bold text-lg'>
          Non Asynchronous redux
        </h1>
        <Banner />
        <div className=''>
          <button className='btn primary' onClick={() => clickedButton('blue')} >to blue</button>
          <button className='btn secondary' onClick={() => clickedButton('red')} >to red</button>
        </div>
      </div>
      <div className='h-px bg-black w-full'></div>

      <div className='w-full h-1/2'>
        <h1 className='font-bold text-lg'>
          Asynchronous call with thunk middleware
        </h1>
        <AsyncDataComponent />
      </div>
    </div>
  );
}

export default App;

