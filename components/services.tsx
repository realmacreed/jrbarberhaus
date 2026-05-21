import { Reveal } from "./reveal";

const services = [
  { name: "Haircut", price: "$40" },
  { name: "Haircut + Beard", price: "$50" },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <Reveal>
          <span className="section-label">Services</span>
          <h2 className="section-title">What We Offer</h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="services-list">
            {services.map((s) => (
              <li key={s.name} className="service-row">
                <span className="service-name">{s.name}</span>
                <span className="service-price">{s.price}</span>
              </li>
            ))}
          </ul>
          <p className="services-note">Additional services available — ask in shop.</p>
        </Reveal>
      </div>
    </section>
  );
}
