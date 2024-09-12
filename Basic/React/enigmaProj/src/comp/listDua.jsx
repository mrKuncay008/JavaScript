import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import { Button } from "@nextui-org/react";
import {Input} from "@nextui-org/react";

import { useState } from "react";

const TodoBaru = () => {
  // State Menyimpan list
  const [todo, setTodo] = useState([
    { id: 0, Aktifity: '', jam: '', status: '' },
  ]);
  // State Membersikan nilai todo saat di submit
  const[inputVal, setInputVal] = useState('');
  
  // State add button todo
  const addItem = () => {
    if (inputVal.trim() !== '') {
      const newTodo = {
        id: todo.length + 1, 
        Aktifity: inputVal,
        jam: '-',
        status:'Done'
      };
      setTodo([...todo,newTodo]);
      setInputVal('');
    }
  };
  
  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const outputTodo = todo.map((item) => 
    <TableRow key={item.id}>
        <TableCell>{item.Aktifity}</TableCell>
        <TableCell> {item.jam}</TableCell>
        <TableCell>{item.status}</TableCell>
    </TableRow>
  );
  
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
        <TableBody> {outputTodo} </TableBody>
      </Table>
      <div className="flex max-w-sm w-full flex-wrap md:flex-nowrap gap-4">

      <Input 
      type="text"
      width="120px"
      label="Add List"
      value={inputVal} onChange={handleInputChange}
      onKeyDown={(e) => { // Fungsi untuk tekan enter
        if(e.key === "Enter")
          addItem();
      }}
      />
    <Button onClick={addItem} size="sm" className="flex my-2 mx-2 text-slate-200" color="success">add</Button>
    </div>
  </div>
    );
}

export default TodoBaru;