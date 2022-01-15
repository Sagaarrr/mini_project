
import './App.css'
import Homepage from'./components/homepage/homepage'
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  return (
    <div className="App">
   <Homepage />
   <Login />
   <Register/>
    </div>
  );
}

export default App;
/* bedNo:Number,
    fName:String,
    mName:String,
    bMark:String,
    bDate:String,
    bTime:String,
    bldGrp:String,
    wgt:String*/ 
