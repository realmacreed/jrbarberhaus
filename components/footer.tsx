const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">
        &copy; 2026 JR Barber Haus &nbsp;&middot;&nbsp; jrbarberhaus.com &nbsp;&middot;&nbsp; Shelby Township, MI
      </span>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l.label}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </footer>
  );
}
