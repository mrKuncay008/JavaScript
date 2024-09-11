import { Card, CardHeader, CardBody, CardFooter, Divider, } from "@nextui-org/react";

const TodoSatu = (Day) => { // Mendefinisikan Komponen yang menrima property / Props sebagai parameter
    return (
        <Card className="max-w-[300px] bg-slate-800">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-lg text-white">{Day.day}</p> {/* Menampilkan nilai dari prop `day` dalam elemen <p>*/}
            <p className="text-start text-small text-slate-400">My List</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <ul className="m-3 list-disc text-md text-slate-300">
            <li>{Day.list1}</li>
            <li>{Day.list2}</li>
            <li>{Day.list3}</li>
          </ul>
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    );
}
export default TodoSatu;