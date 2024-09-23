import { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import axiosInst from "../lib/axios";

const RefCoba = () => {
    // const inputRef = useRef();
    const [inputList, setInputList] = useState('');
    const [listItem, setListItem] = useState([]);

    const apiWislist = async () => {
        const myData = await axiosInst.get('/wislistItem');
        //console.log(myData);
        //console.log(myData.data);
        setListItem(myData.data);
    }

    useEffect(() => {
        apiWislist();
    },[])

    const addList = () => {
        setListItem([...listItem, inputList]);
        setInputList('');
    };
    return (
        <>
            <div className="flex items-center p-4 gap-4">
                <Input className="text-slate-950"
                onChange={(event) => {
                    if (!event.target.value.endsWith('1')) {
                        setInputList(event.target.value);                        
                    }
                }}
                onKeyDown={(e) => { // Fungsi untuk tekan enter
                    if(e.key === "Enter")
                      addList();
                }}
                value={inputList}
                label='Wistlist Item'/>
                <Button onClick={addList} size="md" className="flex my-2 mx-2 text-slate-200" color="warning">add</Button>
            </div>
            
            <p className="text-center font-semibold text-2xl">{inputList}</p>
            
            <ul className="list-decimal list-inside text-center">
                {listItem.map((item) => {
                    // eslint-disable-next-line react/jsx-key
                    return <li>{item.nama}</li>;
                })}
            </ul>
        </>
    );
}
export default RefCoba;