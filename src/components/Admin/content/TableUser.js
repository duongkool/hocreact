
const TableUser = (props) => {
    const { listUsers } = props;

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-info"
                                            onClick={() => props.handleClickBtnView(item)}
                                        >View
                                        </button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >Updata</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleDeleteUser(item)}

                                        >Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan="4">Not found data</td>
                        </tr>}

                </tbody>
            </table>
        </>

    )
}
export default TableUser;