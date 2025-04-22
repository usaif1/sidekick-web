import { useEffect } from "react";
import Modal from "react-modal";
import { useModalStore } from "../globalStore/modalStore";
import PartnerForm from "./PartnerForm";
import CitiesAndCampuses from "./offeringModals/CitiesAndCampuses";
import WarehousesAndIndustrialZones from "./offeringModals/WarehousesAndIndustrialZones";
import DriversAndFleets from "./offeringModals/DriversAndFleets";


const GlobalModal = () => {
  const { modalType, closeModal } = useModalStore();

  useEffect(() => {
    if (modalType !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalType]);

  return (
    <Modal
      isOpen={modalType !== null}
      onRequestClose={closeModal}
      className="absolute bg-white rounded-2xl mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
    >
      {modalType === "partnerForm" && <PartnerForm onClose={closeModal} />}
      {modalType === "citiesAndCampuses" && <CitiesAndCampuses onClose={closeModal} />}
      {modalType === "warehousesAndIndustrialZones" && <WarehousesAndIndustrialZones onClose={closeModal} />}
      {modalType === "driversAndFleets" && <DriversAndFleets onClose={closeModal} />}
    </Modal>
  );
};

export default GlobalModal;
