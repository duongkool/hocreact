import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
// class DisplayInfor extends React.Component {
//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div className={+user.age > 18 ? "blue" : "red"} key={user.id}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>DELETE</button>
//                                         {/* <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button> */}
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    return (
        <div className="display-infor-container">
            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? " Hide List User" : "Show List User"}
                </button>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div className={+user.age > 18 ? "blue" : "red"} key={user.id}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>DELETE</button>
                                    {/* <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button> */}
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;