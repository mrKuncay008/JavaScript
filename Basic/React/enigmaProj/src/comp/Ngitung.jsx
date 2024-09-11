import { Button } from "@nextui-org/react";
import { useState } from "react";

// Coponent Biasa Funct
 const Count = () => {
    const [count, setCount] = useState(0); 
    const intCouter = () => {
        setCount(count + 1);
    }
    const delCouter = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <div className="flex items-center justify-around min-h-96">
                <Button onClick={delCouter} color="danger">Del</Button>
                <span className="text-3xl font-semibold">{count}</span>
                <Button onClick={intCouter} color="primary">add</Button>
            </div>
        </div>
    );
}; 

// Class Component
// class Count extends React.Component {
//     state = {count: 0,};
// 
//      intCouter = () => {
//          this.setState({count: + 1});
//      }
//      delCouter = () => {
//         this.setState({count: - 1});
//      }
//     render () {
//         return (
//             <div>
//             <div className="flex items-center justify-around min-h-96">
//                 <Button onClick={this.delCouter} color="danger">Del</Button>
//                 <span className="text-3xl font-semibold">{this.count}</span>
//                 <Button onClick={this.intCouter} color="primary">add</Button>
//             </div>
//         </div>
//         );
//     };
// };
export default Count;