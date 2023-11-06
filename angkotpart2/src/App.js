import Prop from './Comp/props';
import Seet from './Comp/seet';
import Input from './Comp/input';

// Styles
import './App.css';
import './Comp/seet.css';
import './Comp/input.css';

function App() {
  const element = () => {
  return (
      <p className='element-tit'>by maspren || Mr.Kuncay008</p>
      /*ini adalah obj props dari file Prop*/
  );
}
const hendle = (message) => {
  window.alert(message);
}
  return (
    <div className="App">
      <div className='App-jud'>
        <Prop name={element} />
      </div>
      <div className="App-header">
      <Seet Algo={hendle} />
      <Input />
            <p>Hallo Welcome a Angkot Project 😊 ! Cheerss 🥳 !</p>
      </div>
    </div>
  );
}

export default App;
