'use client';
import React, { useState } from 'react';
import type { FC } from "react";
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

import Modal from '../modal/Modal';
import LoginModal from '../modal/LoginModal';
import LocationModal from '../modal/LocationModal';
import TimingModal from '../modal/TimingModal';
import AboutModal from '../modal/AboutModal';
import OurGoalsModal from '../modal/OurGoalsModal';
import { SideNavbar } from "../../_lib/types/genericComponents";

import HamburgerIcon from '../../_assets/pngs/hamBurger.png';
import colorHamIcon from '../../_assets/svgs/colorHamIcon.svg';

const SideNavbar: FC<SideNavbar> = ({ hamBurgerIcon }: SideNavbar) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const [locModalOpen, setLocModalOpen] = useState(false);
  const [hourModalOpen, setHourModalOpen] = useState(false);
  const [aboutModalOpen, setaboutModalOpen] = useState(false);
  const [ourGoasModalOpen, setourGoasModalOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };
  return (
    <div>
      <div className="text-left">
        <button
          className="text-white text-3xl rounded-lg mr-2 focus:outline-none"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={handleNavbarToggle}
        >
          {hamBurgerIcon ? (
            <Image src={colorHamIcon} alt="HamburgerIcon" />
          ) : (
            <Image src={HamburgerIcon} alt="HamburgerIcon" />
          )}
        </button>
      </div>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-80 h-screen p-4 overflow-y-auto rounded-r-xl transition-transform ${
          isSideNavbarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        // tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          {t('sideBar.MENU')}
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 rounded-lg text-2xl p-1.5 absolute top-3 right-3 inline-flex items-center"
          onClick={handleNavbarToggle}
        >
          <svg
            aria-hidden="true"
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="h-screen flex flex-col justify-between py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium flex-grow">
            <li onClick={() => setisLoginModalOpen(true)}>
              <div
                onClick={handleNavbarToggle}
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-4">{t("sideBar.login")}</span>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.see-the-menu')}
                </span>
              </Link>
            </li>
            <li onClick={() => setLocModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.pickup-orders')}
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </div>
            </li>
            <li>
              <Link
                href="/deliverOrder"
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                 onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.deliver-order')}
                </span>
              </Link>
            </li>
            {/* <li onClick={() => setLocModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.deliver-order')}
                </span>
              </div>
            </li> */}
            <li onClick={() => setLocModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.branches')}
                </span>
              </div>
            </li>
            <li onClick={() => setHourModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.opening-hours')}
                </span>
              </div>
            </li>
            <li onClick={() => setaboutModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.about-us')}
                </span>
              </div>
            </li>
            <li onClick={() => setourGoasModalOpen(true)}>
              <div
                className={`flex    ${
                  lang === "ar" ? "flex-row-reverse gap-4" : "items-center"
                }
                 p-2 py-4 cursor-pointer text-gray-900 rounded-lg text-sm px-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                onClick={handleNavbarToggle}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span
                  className={` ml-4 whitespace-nowrap ${
                    lang === "ar" ? "" : "flex-1"
                  }`}
                >
                  {t('sideBar.goals')}
                </span>
              </div>
            </li>
          </ul>
          <div className="mb-[20px] ml-[80px] mr-[80px] flex justify-between mt-auto">
            {/* <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4.59998V15.4M12.7 7.74998C12.7 6.50798 11.4913 5.49998 10 5.49998C8.50875 5.49998 7.30005 6.50798 7.30005 7.74998C7.30005 8.99198 8.50875 9.99998 10 9.99998C11.4913 9.99998 12.7 11.008 12.7 12.25C12.7 13.492 11.4913 14.5 10 14.5C8.50875 14.5 7.30005 13.492 7.30005 12.25" stroke="#ABA5A2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M5.5 2.20421C6.86757 1.41302 8.42006 0.997576 10 1.00001C14.9707 1.00001 19 5.02931 19 10C19 14.9707 14.9707 19 10 19C5.0293 19 1 14.9707 1 10C1 8.36111 1.4383 6.82301 2.2042 5.50001" stroke="#ABA5A2" stroke-width="1.5" stroke-linecap="round"/>
            </svg> */}

            <a
              href="https://www.instagram.com/sweetworldpastries"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65626 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z"
                  fill="#ABA5A2"
                />
              </svg>
            </a>

            <a
              href="https://aalmuwallad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="cursor-pointer"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5625 0C19.4742 0 20.3485 0.364697 20.9932 1.01386C21.6378 1.66303 22 2.54348 22 3.46154V14.5385C22 15.4565 21.6378 16.337 20.9932 16.9861C20.3485 17.6353 19.4742 18 18.5625 18H3.4375C2.52582 18 1.65148 17.6353 1.00682 16.9861C0.362164 16.337 0 15.4565 0 14.5385V3.46154C0 2.54348 0.362164 1.66303 1.00682 1.01386C1.65148 0.364697 2.52582 0 3.4375 0H18.5625ZM20.625 5.48446L11.3492 10.9814C11.2616 11.0332 11.1635 11.0648 11.0622 11.0739C10.961 11.083 10.8589 11.0694 10.7635 11.034L10.6508 10.9814L1.375 5.48723V14.5385C1.375 15.0893 1.5923 15.6176 1.97909 16.0071C2.36589 16.3966 2.89049 16.6154 3.4375 16.6154H18.5625C19.1095 16.6154 19.6341 16.3966 20.0209 16.0071C20.4077 15.6176 20.625 15.0893 20.625 14.5385V5.48446ZM18.5625 1.38462H3.4375C2.89049 1.38462 2.36589 1.60343 1.97909 1.99293C1.5923 2.38243 1.375 2.9107 1.375 3.46154V3.87969L11 9.58154L20.625 3.87692V3.46154C20.625 2.9107 20.4077 2.38243 20.0209 1.99293C19.6341 1.60343 19.1095 1.38462 18.5625 1.38462Z"
                  fill="#ABA5A2"
                />
              </svg>
            </a>

            {/* <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6931 20H17.5624C2.45258 19.1308 0.307214 6.37692 0.00732409 2.48462C-0.0168399 2.18198 0.0189265 1.87756 0.112574 1.58878C0.206221 1.3 0.355908 1.03254 0.55306 0.801732C0.750211 0.570923 0.990951 0.381298 1.26149 0.243723C1.53202 0.106147 1.82703 0.0233245 2.12962 7.21224e-07H6.36652C6.67453 -0.000297558 6.97553 0.0919312 7.23054 0.264741C7.48554 0.43755 7.6828 0.682977 7.79676 0.969232L8.96556 3.84615C9.0781 4.12581 9.10603 4.43237 9.04588 4.72776C8.98573 5.02316 8.84015 5.29436 8.62723 5.50769L6.98937 7.16154C7.24521 8.61596 7.94147 9.95667 8.98394 11.0023C10.0264 12.0479 11.3648 12.7479 12.818 13.0077L14.4866 11.3538C14.7031 11.1432 14.9767 11.001 15.2735 10.9449C15.5702 10.8888 15.8769 10.9213 16.1552 11.0385L19.0542 12.2C19.336 12.3176 19.5764 12.5165 19.7449 12.7713C19.9133 13.0261 20.0021 13.3253 20 13.6308V17.6923C20 18.3043 19.7569 18.8913 19.3243 19.3241C18.8917 19.7569 18.3049 20 17.6931 20ZM2.31417 1.53846C2.11023 1.53846 1.91464 1.61951 1.77044 1.76376C1.62623 1.90802 1.54522 2.10368 1.54522 2.30769V2.36923C1.89894 6.92308 4.16733 17.6923 17.647 18.4615C17.748 18.4678 17.8493 18.454 17.945 18.421C18.0406 18.388 18.1289 18.3365 18.2046 18.2693C18.2803 18.2021 18.3421 18.1207 18.3862 18.0296C18.4304 17.9385 18.4562 17.8395 18.4621 17.7385V13.6308L15.5631 12.4692L13.3563 14.6615L12.9872 14.6154C6.29732 13.7769 5.38996 7.08462 5.38996 7.01539L5.34382 6.64615L7.52763 4.43846L6.37421 1.53846H2.31417Z" fill="#ABA5A2"/>
            </svg> */}

            <a
              href="https://twitter.com/remal_alkhararh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="cursor-pointer"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.212 2.65599C20.4489 2.99359 19.6396 3.21536 18.811 3.31399C19.6841 2.79112 20.3373 1.96873 20.649 0.999988C19.829 1.48799 18.93 1.82999 17.994 2.01499C17.3646 1.34157 16.5304 0.894951 15.621 0.744572C14.7116 0.594194 13.7779 0.748479 12.9653 1.18344C12.1526 1.6184 11.5064 2.30967 11.1271 3.14978C10.7478 3.98989 10.6568 4.93177 10.868 5.82899C9.20494 5.74578 7.57797 5.31371 6.09274 4.56085C4.60752 3.80799 3.29724 2.75116 2.247 1.45899C1.87529 2.09744 1.67996 2.82321 1.681 3.56199C1.681 5.01199 2.42 6.29299 3.541 7.04299C2.87702 7.02205 2.22765 6.84273 1.647 6.51999V6.57099C1.64697 7.53686 1.98104 8.47301 2.59253 9.22066C3.20403 9.96831 4.05532 10.4814 5.002 10.673C4.38564 10.8402 3.7393 10.8648 3.112 10.745C3.37893 11.5764 3.89922 12.3035 4.6 12.8244C5.30078 13.3453 6.14696 13.634 7.02 13.65C6.15236 14.3314 5.15889 14.8352 4.09641 15.1324C3.03393 15.4295 1.92329 15.5144 0.828003 15.382C2.73972 16.6114 4.96511 17.2641 7.238 17.262C14.932 17.262 19.138 10.889 19.138 5.36199C19.138 5.18199 19.134 4.99999 19.126 4.82099C19.9444 4.22935 20.6508 3.49555 21.212 2.65599Z"
                  fill="#ABA5A2"
                />
              </svg>
            </a>

            <a
              href={`https://wa.me/9669665553664`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.05 2.91C16.1332 1.98392 15.0412 1.24967 13.8377 0.75005C12.6341 0.250433 11.3432 -0.00454115 10.04 -1.46553e-06C4.58005 -1.46553e-06 0.130049 4.45 0.130049 9.91C0.130049 11.66 0.590049 13.36 1.45005 14.86L0.0500488 20L5.30005 18.62C6.75005 19.41 8.38005 19.83 10.04 19.83C15.5 19.83 19.9501 15.38 19.9501 9.92C19.9501 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.56005 18.15 7.11005 17.75 5.84005 17L5.54005 16.82L2.42005 17.64L3.25005 14.6L3.05005 14.29C2.2278 12.977 1.79119 11.4592 1.79005 9.91C1.79005 5.37 5.49005 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C16.6175 4.85396 17.2257 5.76266 17.6394 6.76342C18.0531 7.76419 18.2641 8.83711 18.26 9.92C18.28 14.46 14.58 18.15 10.04 18.15ZM14.56 11.99C14.31 11.87 13.09 11.27 12.87 11.18C12.64 11.1 12.48 11.06 12.31 11.3C12.14 11.55 11.67 12.11 11.53 12.27C11.39 12.44 11.24 12.46 10.99 12.33C10.74 12.21 9.94005 11.94 9.00005 11.1C8.26005 10.44 7.77005 9.63 7.62005 9.38C7.48005 9.13 7.60005 9 7.73005 8.87C7.84005 8.76 7.98005 8.58 8.10005 8.44C8.22005 8.3 8.27005 8.19 8.35005 8.03C8.43005 7.86 8.39005 7.72 8.33005 7.6C8.27005 7.48 7.77005 6.26 7.57005 5.76C7.37005 5.28 7.16005 5.34 7.01005 5.33H6.53005C6.36005 5.33 6.10005 5.39 5.87005 5.64C5.65005 5.89 5.01005 6.49 5.01005 7.71C5.01005 8.93 5.90005 10.11 6.02005 10.27C6.14005 10.44 7.77005 12.94 10.25 14.01C10.84 14.27 11.3 14.42 11.66 14.53C12.25 14.72 12.79 14.69 13.22 14.63C13.7 14.56 14.69 14.03 14.89 13.45C15.1 12.87 15.1 12.38 15.03 12.27C14.96 12.16 14.81 12.11 14.56 11.99Z"
                  fill="#ABA5A2"
                />
              </svg>
            </a>
          </div>
          <span className="text-center text-[13px] font-medium capitalize text-gray-500">
            Powered By Talabat Menu © 2023
          </span>
        </div>
      </div>

      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6 px-4"
        isModalOpen={isLoginModalOpen}
        handleModalToggle={() => setisLoginModalOpen(!isLoginModalOpen)}
      >
        <div className="mt-[59px]">
          <LoginModal />
        </div>
      </Modal>

      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6 px-4"
        isModalOpen={locModalOpen}
        handleModalToggle={() => setLocModalOpen(!locModalOpen)}
      >
        <div className="mt-[59px]">
          <LocationModal />
        </div>
      </Modal>

      <Modal
        isModalOpen={hourModalOpen}
        handleModalToggle={() => setHourModalOpen(!hourModalOpen)}
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6"
      >
        <div className="">
          <TimingModal />
        </div>
      </Modal>

      <Modal
        isModalOpen={aboutModalOpen}
        handleModalToggle={() => setaboutModalOpen(!aboutModalOpen)}
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6"
      >
        <div className="mt-[59px]">
          <AboutModal />
        </div>
      </Modal>

      <Modal
        isModalOpen={ourGoasModalOpen}
        handleModalToggle={() => setourGoasModalOpen(!ourGoasModalOpen)}
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6"
      >
        <div className="mt-[59px]">
          <OurGoalsModal />
        </div>
      </Modal>
    </div>
  );
};

export default SideNavbar;
