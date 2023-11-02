import './App.css';
import Child from './Child'
import TransactionProvider from './transactionContext';

function App() {
  return (
   <div>
    <TransactionProvider>
    <Child />
    </TransactionProvider>
   </div>
  );
}

export default App;
