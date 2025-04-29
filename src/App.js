// import logo from './logo.svg';
import './App.css';
// import MyCard from "./components/MyCard";
import NavBar from './components/NavBar';
import TourCard from './components/TourCard';
import TourCards from './components/TourCards';
import card1 from './assert/img/download.jpeg'
import card2 from './assert/img/download2.jpeg'
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
    {/* <nav class="navbar navbar-dark bg-dark">
      Hello
    </nav> */}
    {/* <h3>We are using bootstrap</h3>
    <br/>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button> */}

    {/* <br/>
    <br/> */}

    {/* <i class="bi bi-balloon-heart"></i> */}

    <NavBar color={"bg-success"} heading={"Bootstrap Style"}/>

   {/* <div className='my'>
   <TourCard imageurl={card1} name={"Eyes"}/>
   <TourCard imageurl={card2} name={"feather"}/>
   </div> */}

   <TourCards/>

    </>
  );
}

export default App;
