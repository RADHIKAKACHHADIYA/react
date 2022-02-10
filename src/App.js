import { Provider } from 'react-redux';
import './App.css'
import TimeFun from './containes/timeFun';
import TimerClass from './containes/timerClass';
import configareStore from './redux/store';
import Counter from './containes/Counter';

function App() {

  let store = configareStore();

  return (
    <>
      <Provider store={store}>
        <TimeFun />
        <TimerClass />
        <Counter />
      </Provider>
    </>
  );
}


export default App;
