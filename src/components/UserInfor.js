import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'duong',
        address: 'da nang',
        age: 18
    };
    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                my name is {this.state.name} i from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnchangeInput(event)} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;