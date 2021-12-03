import logo from './logo.svg';
import './App.css';
import CalcTime from './Components/Clock.js'
import './Components/Clock.css'
import CurrencyConverter from './Components/Currency-Converter';

function App() {
  return (
    <>
      <div className='container'>
        <CalcTime locationTime={['VietNam', '+7']} />
        <CalcTime locationTime={['Indian', '+5.30']} />
        <CalcTime locationTime={['California', '-8']} />
        <CalcTime locationTime={['New York', '-5']} />
        <CalcTime locationTime={['London', '+1']} />
        <CalcTime locationTime={['Sydney', '+11']} />
      </div>  

      <div>
        <CurrencyConverter/>
      </div>
    </>
  );
}

export default App;
