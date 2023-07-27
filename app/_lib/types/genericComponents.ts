import { Dispatch, SetStateAction } from "react";

export interface Modal {
  children: any;
  modalPosition: string;
  cancelCSS: string;
  modalCSS: string;
  isModalOpen: boolean;
  handleModalToggle: () => void;
}

export interface SideNavbar {
  hamBurgerIcon?: boolean;
}

export interface QuantityCounter {
  delIconflag?: boolean;
  color: string;
  bgColor?: string;
  count?: number;
  incrementCounter?: () => void;
  decrementCounter?: () => void;
  navigate?: () => void;
  actionType?: string;
}

export interface InputModal {
  setQuery: Dispatch<SetStateAction<string>>
}

export interface LocationModal {
  restaurants?: any;
  setLocModalOpen?: any;
}

export interface LoginModalProps {
  login?: (phone: string) => void
  info?: boolean
}

export interface OTPModal {
  verifyOtp: (otp: string) => void
  setOtpModalOpen: Dispatch<SetStateAction<boolean>>
}
