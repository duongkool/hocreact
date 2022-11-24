import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import _ from 'lodash';



const ModalViewUser = (props) => {
    // const [show, setShow] = useState(false);
    const { show, setShow, dataView } = props;
    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassWord("");
        setUserName("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        props.resetViewData()
    };
    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };
    // const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email);
            setUserName(dataView.username);
            setRole(dataView.role);
            setImage("");
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView])
    // const handleUloadImage = (event) => {
    //     if (event.target && event.target.files && event.target.files[0]) {
    //         setPreviewImage(URL.createObjectURL(event.target.files[0]));
    //         setImage(event.target.files[0])
    //     } else {

    //     }
    // }
    // const handleSubmitCreateUser = async () => {
    //     const isValidEmail = validateEmail(email);
    //     if (!isValidEmail) {
    //         toast.error('invalid email')
    //         return;
    //     }
    //     if (!password) {
    //         toast.error('invalid password')
    //         return;
    //     }

    //     // validate



    //     let data = await postCreateNewUser(email, password, username, role, image);
    //     if (data && data.EC === 0) {
    //         toast.success(data.EM);
    //         handleClose();
    //         await props.fetchListUser()
    //     }
    //     if (data && data.EC !== 0) {
    //         toast.error(data.EM)
    //     }

    // }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                className='modal-add-user'
                backdrop={"static"}
                show={show}
                onHide={handleClose}
                size={'xl'}>
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassWord(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                disabled
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                                disabled
                            >
                                <option value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label htmlFor='lableUpload' className="form-label lable-upload"> <FcPlus /> Upload File Image</label>
                            <input
                                id='lableUpload'
                                type={"file"}
                                hidden
                                disabled

                            // onChange={(event) => handleUloadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ? <img src={previewImage} /> : <span>preview image</span>}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalViewUser;