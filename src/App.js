// import logo from './logo.svg';
import './App.css';
import MyCard from './components/MyCard';

function App() {
  return (
    // we can use <> in app also
    // <div className="App">
    //   <div className="header">
    //     {/* <h1>Hello Siddharth</h1>
    //     <MyCard/> */}

    //     <div className="card">

    //       </div>
    //   </div>
    //   </div>
    <>
    <MyCard heading="Good Morning"/>
    <MyCard heading="Good afternoon"/>
    <MyCard heading="Good evening"/>
    </>
  );
}

export default App;
