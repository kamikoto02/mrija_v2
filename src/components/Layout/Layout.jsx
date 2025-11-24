import React, {useRef, useState} from 'react';
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import Registration from "../Modal/Registration/Registration";
import Successfully from "../Modal/Successfully";

const Layout = () => {
    const modal = useRef();
    const succesModal = useRef();
    const [selectedEventName, setSelectedEventName] = useState('');
    function handleOpenModal({name}) {
        setSelectedEventName(name);
        modal.current.open()

    }
    function handleCloseModal() {
        modal.current.close()
    }
    function handleOpenSuccesModal() {
        succesModal.current.open()

    }
    function handleCloseSuccesModal() {
        succesModal.current.close()
    }

    return (
        <>
            <Header/>
            <Modal ref={modal}>
                <Registration onSuccesOpen={handleOpenSuccesModal} onClose={handleCloseModal}  selectedEventName={selectedEventName} />
            </Modal>
            <Modal ref={succesModal}>
                <Successfully  onClose={handleCloseSuccesModal} />
            </Modal>
            <Outlet  context={{ closeModal: handleCloseModal, openModal: handleOpenModal }} />
            <Footer/>
        </>
    );
};

export default Layout;