// Style Css
import './App.css'

// Component
// import Cardcomp from "./comp/Card";
import Header from "./comp/header";
import TodoBaru from './comp/listDua';
import Footerme from './comp/Footerme';
// import TodoSatu from "./comp/TodoList";
// import Count from './comp/Ngitung';

function App() {
  return (
    <>
      <Header />
        <br />
        {/* <div className='grid grid-cols-4 gap-2'>
          <TodoSatu 
          day= "Monday"
          list1= 'Turu'
          list2= 'Makan'
          list3= 'Ngoding'/>

          <TodoSatu day= "Thuesday"
          list1= 'Ngegrab'
          list2= 'Makan'
          list3= 'Ngoding'/>
          <TodoSatu day= "Friday"
          list1= 'Mabar'
          list2= 'Makan'
          list3= 'Ngoding'/>
        </div> */}
        
      {/* <Count /> */}
      <TodoBaru />
      <Footerme>Mangatzz ❤️</Footerme>{/* Props Content */}
    </>
  )
}
export default App
