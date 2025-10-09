"use client";
import React, { useEffect } from "react";

export default function ImagenVariable() {
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    const imgData = Array.from(imgs).map((img) => ({
      src: img.src,
      alt: img.alt,
      width: img.width,
      height: img.height,
    }));
    console.log("Datos de la imágen:", imgData);
  }, []);

  return null;
}