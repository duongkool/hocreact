import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'da nang',
        age: ''
    };
    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name}, i'm  {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input placeholder="Your name" type="text" onChange={(event) => this.handleOnchangeInput(event)} />
                    <input placeholder="Your age" type="text" onChange={(event) => this.handleOnchangeAge(event)} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;