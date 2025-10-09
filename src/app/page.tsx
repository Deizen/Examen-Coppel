"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/mascotas");
  }, [router]);

  return <p className="text-center mt-10">Redirigiendo a Mascotas...</p>;
}