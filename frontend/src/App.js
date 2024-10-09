import "./App.css";
import TransactionTable from "./components/TransactionList";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <TransactionTable />
    </div>
  );
}

export default App;
