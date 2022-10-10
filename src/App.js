import logo from './logo.svg';
import './App.css';
import ComponentWithUseState from './component/ComponentWithUseState';
import ComponentWithUseEffect from './component/ComponentWithUseEffect';
import Parent from './component/ComponentWithUseContext/Parent'

function App() {
  return (
    <div className="App">
      {/* <ComponentWithUseState/> */}
      {/* <ComponentWithUseEffect/> */}
      <Parent />
    </div>
  );
}

export default App;
