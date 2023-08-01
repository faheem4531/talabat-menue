import React from "react";
import type { FC } from "react";

import Image from "next/image";

import { Modal } from "../../_lib/types/genericComponents";

import cancelIcon from "../../_assets/pngs/cancelIcon.png";

const Modal: FC<Modal> = ({
  children,
  modalPosition,
  cancelCSS,
  modalCSS,
  isModalOpen,
  handleModalToggle,
}) => {
  const handleModalOpen = (event: { stopPropagation: () => void; }) => {
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
          className={`fixed top-0 left-0 right-0 ${modalPosition} right-0 z-50 w-full h-screen pt-12 px-4 flex justify-start bg-opacity-50 bg-gray-900`}
        >
          <div
            className={`relative bg-white shadow ${modalCSS} w-[360px]`}
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
