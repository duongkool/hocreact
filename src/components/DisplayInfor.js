import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                {/* <img src={logo} />   */}
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </button>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div className={+user.age > 18 ? "blue" : "red"} key={user.id}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor;