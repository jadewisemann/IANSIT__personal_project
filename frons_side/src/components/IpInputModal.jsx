export default function IpInputModal({setIsModalOpen }) {
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="ip-input-modal-container">
            <button className="ip-input-modal-close-button" onClick={closeModal} >
                X
            </button>
            <div className="ip-input-modal-content"></div>
        </div>
    );
}
