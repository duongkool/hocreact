import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCraeteUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCraeteUser(true)}> <FcPlus /> add new user</button>
                </div>
                <div className="table-user-container">
                    table user
                </div>
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCraeteUser} />
        </div>
    )
}
export default ManageUser;