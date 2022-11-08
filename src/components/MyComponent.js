import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Trần Văn A", age: "18" },
            { id: 2, name: "Trần Văn B", age: "45" },
            { id: 3, name: "Trần Văn C", age: "37" }
        ]
    }
    // JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}
export default MyComponent;                