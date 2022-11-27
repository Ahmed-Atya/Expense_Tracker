import './App.css';
import Header from './components/Header'
import Balance from "./components/Balance";
import Expenses from "./components/IncomeExpenses";
import TransactionsList from "./components/TransactionsList";
import AddToTransactions from "./components/AddToTransactions";

import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
        <div className="container">
            <Balance/>
            <Expenses/>
            <TransactionsList/>
            <AddToTransactions/>
        </div>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
