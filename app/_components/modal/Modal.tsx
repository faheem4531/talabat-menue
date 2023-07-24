import React from "react";
import Image from "next/image";
import cancelIcon from "../../_assets/pngs/cancelIcon.png";

interface Props {
  children: any;
  modalPosition: string;
  cancelCSS: string;
  modalCSS: string;
  isModalOpen: boolean;
  handleModalToggle: () => void;
}

const Modal = ({
  children,
  modalPosition,
  cancelCSS,
  modalCSS,
  isModalOpen,
  handleModalToggle,
}: Props) => {
  const handleModalOpen = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div>
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          onClick={handleModalToggle}
          className={`fixed top-0 left-0 right-0 ${modalPosition} right-0 z-50 w-full h-screen p-4 flex justify-center bg-opacity-50 bg-gray-900`}
        >
          <div
            className={`relative bg-white shadow ${modalCSS} w-80`}
            onClick={handleModalOpen}
          >
            <button
              type="button"
              onClick={handleModalToggle}
              className={`absolute ${cancelCSS} z-50 text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center`}
            >
              <Image src={cancelIcon} alt="cancel icon" />
            </button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
