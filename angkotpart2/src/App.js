import logo from './Property/lol.png';
import Prop from './Comp/props';
import Seet from './Comp/seet';

// Styles
import './App.css';
import './Comp/seet.css';


function App() {
  const element = () => {
    return (
      <p className='element-tit'>by maspren || Mr.Kuncay008</p>
      /*ini adalah obj props dari file Prop*/
  );
}
  return (
    <div className="App">
      <div className='App-jud'>
          <Prop name={element} />
      </div>
      <div className="App-header">
      <Seet />
            <p>Hallo Welcome a Angkot Project 😊 ! Cheerss 🥳 !</p>
      </div>
    </div>
  );
}

export default App;
