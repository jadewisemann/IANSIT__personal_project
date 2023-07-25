import { useState } from "react";
import IpInputModal from "./IpInputModal";
export default function ModalOpenButton({ title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div className="modal-open-button-container">
            <button className="modal-open-button" onClick={showModal}>
                {title}
            </button>
            {isModalOpen && <IpInputModal setIsModalOpen={setIsModalOpen} />}
        </div>
    );
}
