"use client"; // Enables client-side functionality in the App Router

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for App Router

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home"); // Redirect to /home on page load
  }, [router]);

  return; // Ensure the component returns something
}