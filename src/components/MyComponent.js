import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Trần Văn A", age: "18" },
//             { id: 2, name: "Trần Văn B", age: "45" },
//             { id: 3, name: "Trần Văn C", age: "37" }
//         ],
//     }
//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     // handleDeleteUser = (userId) => {
//     //     let listUsersClone = [...this.state.listUsers];
//     //     listUsersClone = listUsersClone.filter(item => item.id !== userId);
//     //     this.setState({
//     //         listUsers: listUsersClone
//     //     })
//     // }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     // JSX
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser} />
//                 </div>
//                 <br />
//                 <div className="b">
//                     <DisplayInfor
//                         // truyền props
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}                        // handleDeleteUser={this.handleDeleteUser}

//                     />
//                 </div>
//             </>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [
            { id: 1, name: "Trần Văn A", age: "18" },
            { id: 2, name: "Trần Văn B", age: "45" },
            { id: 3, name: "Trần Văn C", age: "37" }
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone)
    }

    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser} />
            </div>
            <br />
            <div className="b">
                <DisplayInfor
                    // truyền props
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
        </>
    )
}
export default MyComponent;                