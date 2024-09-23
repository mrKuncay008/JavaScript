// const catsApi = 'https://api.thecatapi.com/v1/breeds';
// const catsApi = 'https://api.thecatapi.com/v1/images/search?limit=20'
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CatsApi = () => {
    const [listData, setListData] = useState([]);

    const fetchData = async () => {
        try {
            const ApiCat = await axios.get('https://api.thecatapi.com/v1/breeds');
            setListData(ApiCat.data)
        } 
        catch(err) {
            console.error(err);
        }
    };

    useEffect (() => {
        fetchData();
    }, []);

    return (
        <>
        <div className="container table_main">
            <Table variant="light" responsive striped bordered hover size="md">
                <thead className="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>description</th>
                </tr>
                </thead>
                <tbody>
                {listData.map((cat, idx) => (
                    <tr key={cat.id}>
                        <td>{idx + 1}</td>
                        <td>{cat.id}</td>
                        <td>{cat.name}</td>
                        <td>{cat.origin}</td>
                        <td>{cat.description}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
</>
    );
}
export default CatsApi