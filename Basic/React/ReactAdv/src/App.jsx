import './App.css'
import TodoCard from './Comp/TodoCard';
import Footerme from './Comp/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatsApi from './Comp/CatApi';

function App() {

  return (
    <>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" 
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin='anonymous'
      /> */}

      <CatsApi />
      <div className='grid grid-cols-4 gap-2'>
          <TodoCard day="Moday" list={1}/>
          <TodoCard day="Friday" list={2}/>
{/* 
          <TodoCard day= "Thuesday"
          list1= 'Ngegrab'
          list2= 'Makan'
          list3= 'Ngoding'/>
          <TodoCard day= "Friday"
          list1= 'Mabar'
          list2= 'Makan'
          list3= 'Ngoding'/> */}
        </div> 
        <Footerme>Mangatzz ❤️</Footerme>
    </>
  )
}

export default App
