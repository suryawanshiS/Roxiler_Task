// // // import React from "react";
// // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // // import TransactionTable from "./components/TransactionTable";
// // // import NavigationBar from "./components/Navbar";
// // // import AddTransaction from "./components/AddTransaction"; // Assuming this is implemented
// // // import Home from "./components/Home"; // Assuming this is implemented

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div>
// // //         <NavigationBar />
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/transactions" element={<TransactionTable />} />
// // //           <Route path="/add-transaction" element={<AddTransaction />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;



// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import NavigationBar from './components/NavigationBar';
// // import BarChartComponent from './components/BarchartComponent';
// // import CategoryPieChart from './components/CategoryPieChart';
// // import TransactionTable from './components/TransactionTable';
// // import './styles.css'; // Global styles
// // import './components/BarchartComponent.css'; // BarChart styles
// // import './components/TransactionTable.css'; // TransactionTable styles
// // import './components/categorystyle.css'; // PieChart styles
// // import './components/Navbar.css'; // Navbar styles

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         {/* Navigation bar */}
// //         <NavigationBar />
        
// //         {/* App content wrapped with container */}
// //         <div className="container">
// //           <Routes>
// //             {/* BarChartComponent route */}
// //             <Route path="/barchart" element={<BarChartComponent />} />

// //             {/* CategoryPieChart route */}
// //             <Route path="/piechart" element={<CategoryPieChart />} />

// //             {/* TransactionTable route */}
// //             <Route path="/transactions" element={<TransactionTable />} />

// //             {/* Default route */}
// //             <Route path="/" element={<TransactionTable />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/Navbar';
// import TransactionList from './components/TransactionList';  // Updated
// import './components/TransactionList.css'; // Update this file name if necessary

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<TransactionList />} />  {/* Updated */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



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