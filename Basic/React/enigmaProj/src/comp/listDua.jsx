import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import { Button } from "@nextui-org/react";
import {Input} from "@nextui-org/react";

import { useEffect, useState } from "react";
import axiosInst from "../lib/axios";

const TodoBaru = () => {
  // State Menyimpan list
  const [todo, setTodo] = useState([]);
  // State Membersikan nilai todo saat di submit
  const[inputVal, setInputVal] = useState('');
  const[inputValJam, setInputValJam] = useState('');
  // State untuk message 
  const [message, setMessage] = useState('');

  const apiWislist2 = async () => {
    const myData2 = await axiosInst.get('/listDua');
    setTodo(myData2.data);
  }

  
  // State add button todo
  const addItem = async () => {
   /*  if (inputVal.trim() !== '') {
       const newTodo = {
         id: todo.length + 1, Fungsi sama dengan menggunakan post tapi manual
         Aktifity: inputVal,
         jam: '-',
         status:'Done'
       };
     setTodo([...todo, newTodo]); // Rest operator
     }
    */ 
  await axiosInst.post("/listDua", {
      Aktifty:inputVal,
      Jam:inputValJam,
      Status:'Done' // Ini menggunakan Metode post
    });
    apiWislist2();
    setInputVal('');
    setInputValJam('');
  };
 
  useEffect(() => {
    apiWislist2();
  },[])

  const handleInputChange = (event) => {
    if (event.target.value.length < 7) {
      setInputVal(event.target.value);
    }
  };
  const handleInputChangeJam = (eventJam) => {
    if (eventJam.target.value.length < 7) {
      setInputValJam(eventJam.target.value);
    }
  };
  
  const outputTodo = todo.map((item) => 
    <TableRow key={item.id}>
        <TableCell>{item.Aktifty}</TableCell>
        <TableCell> {item.Jam}</TableCell>
        <TableCell>{item.Status}</TableCell>
    </TableRow>
  );
  
  const doneMess = (callback) => {
    setTimeout(() => {
      if(todo.length > 1)
      setMessage('Mantepp add Done !!');
      callback();
    }, 2000);
  }
  const doneMessDua = () => {
    setTimeout(() => {
      if(todo.length > 2)
      setMessage('Tambahin Lagii !!');
    }, 2000);
  }

  // Lifecyle useEffect
  useEffect(() => {
    doneMess (() => {
      doneMessDua();
    })

    return () => {
      console.log('DidUnmount is Done byee !!')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);

  // Dubuging
  console.log('Todo: ', todo);

    return (
      <div>
        <Table className="table-auto" removeWrapper aria-label="table">
        <TableHeader >
          <TableColumn className="bg-slate-800 text-white">AKTIVITY</TableColumn>
          <TableColumn className="bg-slate-800 text-white">TIME</TableColumn>
          <TableColumn className="bg-slate-800 text-white">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {outputTodo} 
        </TableBody>
      </Table>
      <div className="flex max-w-sm w-full flex-wrap md:flex-nowrap gap-4">
      
      <Input 
      type="text"
      label="Add List"
      value={inputVal} // Untuk mengosongkan string input
      onChange={handleInputChange} // untuk perubahan
      onKeyDown={(e) => { // Fungsi untuk tekan enter
        if(e.key === "Enter")
          addItem();}}
      />

      <Input 
      type="text"
      label="Add Jam"
      value={inputValJam} // Untuk mengosongkan string input
      onChange={handleInputChangeJam} // untuk perubahan
      onKeyDown={(e) => { // Fungsi untuk tekan enter
        if(e.key === "Enter")
          addItem();}}
      />

    <Button onClick={addItem} size="sm" className="flex my-2 mx-2 text-slate-200" color="success">add</Button>
      <p className="text-slate-400 text-medium font-bold">{inputVal}</p>
      <p className="text-slate-400 text-medium font-bold">{inputValJam}</p>
    </div>
      <p className="text-green-500 flex text-medium font-bold">{message}</p>
    </div>
  );
}

export default TodoBaru;