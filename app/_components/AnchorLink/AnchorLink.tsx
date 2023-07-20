"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const handleClick = (e: Event) => {
  e.preventDefault();
  const target = (e.target as HTMLAnchorElement).getAttribute("href");

  if (target) {
    const url = new URL(target, window.location.href);
    const anchor = url.hash; // Get the anchor part of the URL
    const targetElement = document.querySelector(anchor);

    if (targetElement) {
      const scrollTo =
        targetElement.getBoundingClientRect().top + +window.pageYOffset;
      window.scroll({ top: scrollTo, behavior: "smooth" });
    }
  }
};

const AnchorLink = () => {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll(".js-anchor-link");
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return null; // Since this is a utility component, it doesn't render anything.
};

export default AnchorLink;
