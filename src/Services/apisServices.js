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
}
export { postCreateNewUser };