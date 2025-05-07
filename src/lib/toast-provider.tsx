"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ fontSize: "16px" }}
        toastOptions={{
          // Global default opts
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            maxWidth: "256px",
            background: "#27272a80",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "6px",
            border: "1px solid #27272a",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
            fontFamily: "sans-serif",
            fontWeight: "normal",
            color: "#f4f4f5",
          },
          // Default opts for specific types (success, error, loading, custom)
          success: {
            duration: 3000,
            icon: "✨",
          },
          error: {
            icon: "😱",
          },
        }}
      />
    </>
  );
}
