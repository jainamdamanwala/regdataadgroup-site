"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed bottom-5 right-5 z-50 transition-all duration-300",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
      ].join(" ")}
    >
      <a
        href={brand.consultLink}
        className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-premium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        Book Complimentary Consult
      </a>
    </div>
  );
}