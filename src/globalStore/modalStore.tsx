import { create } from "zustand";

type ModalType = "partnerForm" | "citiesAndCampuses" | "warehousesAndIndustrialZones" | "driversAndFleets" | null;

interface ModalState {
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  openModal: (type) => set({ modalType: type }),
  closeModal: () => set({ modalType: null }),
}));
