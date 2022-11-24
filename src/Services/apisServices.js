import axios from "../UTILS/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    // lấy ra hết thông tin đã nhập (call apis)
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('v1/participant', data);
};
const putUpdateUser = (id, username, role, image) => {
    // lấy ra hết thông tin đã nhập (call apis)
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('v1/participant', data);
};
const getAllUsers = () => {
    return axios.get('v1/participant/all');
}
const deleteUser = (userId) => {
    return axios.delete('v1/participant', { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
    return axios.get(`v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post(`v1/login`, { email, password }
    );
}
const postRegister = (email, password, username) => {
    return axios.post(`v1/register`, { email, password, username })

}


export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate, postLogin, postRegister };