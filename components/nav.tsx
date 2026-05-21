"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = () => setOpen(false);
    window.addEventListener("scroll", fn, { passive: true, once: true });
    return () => window.removeEventListener("scroll", fn);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a href="#" className="nav-logo">
        <Image src="/656287857_17930594508216116_3391393149288849605_n.jpg" alt="JR Barber Haus" width={72} height={72} className="nav-logo-img" />
        <span className="nav-logo-name">JR Barber Haus</span>
      </a>
      <div className={`nav-links${open ? " nav-links--open" : ""}`}>
        <a href="#services" className="nav-link" onClick={close}>Services</a>
        <a href="#location" className="nav-link" onClick={close}>Location</a>
        <a href="#products" className="nav-link" onClick={close}>Products</a>
        <a href="https://book.squareup.com/appointments/p1zigyf4do2lxd/location/L904FJK880TN7/services" target="_blank" rel="noopener noreferrer" className="nav-book" onClick={close}>Book Now</a>
      </div>
      <button className={`nav-hamburger${open ? " nav-hamburger--open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
