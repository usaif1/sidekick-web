import Modal from "react-modal";
import { useModalStore } from "../globalStore/modalStore";
import PartnerForm from "./PartnerForm";

const GlobalModal = () => {
  const { modalType, closeModal } = useModalStore();

  return (
    <Modal
      isOpen={modalType !== null}
      onRequestClose={closeModal}
      className="absolute bg-white rounded-xl mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
    >
      {modalType === "partnerForm" && <PartnerForm onClose={closeModal} />}
    </Modal>
  );
};

export default GlobalModal;
