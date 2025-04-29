// import logo from './logo.svg';
import './App.css';
import MyCard from "./components/MyCard";

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
    {/* <MyCard heading="Good Morning"/>
    <MyCard heading="Good afternoon"/>
    <MyCard heading="Good evening"/> */}
    <nav class="navbar navbar-dark bg-dark">
      Hello
    </nav>
    <h3>We are using bootstrap</h3>
    <br/>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    </>
  );
}

export default App;
