import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Trần Văn A", age: "18" },
            { id: 2, name: "Trần Văn B", age: "45" },
            { id: 3, name: "Trần Văn C", age: "37" }
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    // JSX
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser} />
                <br />
                <DisplayInfor
                    // truyền props
                    listUsers={this.state.listUsers} />
            </div>
        );
    }
}
export default MyComponent;                