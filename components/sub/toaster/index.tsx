"use client";
import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "#003366",
            color: "#ffff",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#B1C9FF",
          },
        },
        error: {
          style: {
            background: "#003366",
            color: "#fff",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
};
