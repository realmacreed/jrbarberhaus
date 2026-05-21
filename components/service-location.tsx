import { Reveal } from "./reveal";

const services: { name: string; desc: string; price: string; muted?: boolean }[] = [
  { name: "Haircut", desc: "Precision cut, styled to finish", price: "$40" },
  { name: "Haircut + Beard", desc: "Full cut with beard shaping & lineup", price: "$50" },
  { name: "Hair Products & Supplies", desc: "Premium grooming essentials", price: "Coming Soon", muted: true },
];

const hours = [
  { day: "Sunday", time: "Closed" },
  { day: "Monday – Friday", time: "10:00 am – 8:30 pm" },
  { day: "Saturday", time: "11:00 am – 7:00 pm" },
];

export default function ServiceLocation() {
  return (
    <section id="services" className="service-location">
      <div className="service-location-inner">
        <div className="service-location-grid">

          <div className="sl-col">
            <Reveal>
              <span className="section-label">Services</span>
              <h2 className="section-title">What We Offer</h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="services-list">
                {services.map((s, i) => (
                  <li key={s.name} className={`service-row${s.muted ? " service-row--muted" : ""}`}>
                    <span className="service-index">0{i + 1}</span>
                    <span className="service-info">
                      <span className="service-name">{s.name}</span>
                      <span className="service-desc">{s.desc}</span>
                    </span>
                    <span className={s.muted ? "service-coming-soon" : "service-price"}>{s.price}</span>
                  </li>
                ))}
              </ul>
              <p className="services-note">Additional services available — ask in shop.</p>
            </Reveal>
          </div>

          <div className="sl-col" id="location">
            <Reveal delay={100}>
              <span className="section-label">Find Us</span>
              <h2 className="section-title">Location &amp; Hours</h2>
            </Reveal>
            <Reveal delay={220}>
              <div className="location-block">
                <span className="location-detail-label">Address</span>
                <p className="location-detail-value">
                  14071 Lakeside Blvd N<br />Shelby Township, MI 48315
                </p>
              </div>
              <div className="location-block">
                <span className="location-detail-label">Phone</span>
                <p className="location-detail-value">
                  <a href="tel:+15862758918">(586) 275-8918</a>
                </p>
              </div>
              <div className="location-block">
                <span className="location-detail-label">Instagram</span>
                <p className="location-detail-value">
                  <a href="https://www.instagram.com/jrbarberhaus/" target="_blank" rel="noopener noreferrer">@jrbarberhaus</a>
                </p>
              </div>
              <div className="location-block">
                <span className="hours-label">Hours</span>
                <div className="hours-grid">
                  {hours.map((h) => (
                    <div key={h.day} className="hours-row">
                      <span className="hours-day">{h.day}</span>
                      <span className={h.time === "Closed" ? "hours-closed" : "hours-time"}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=14071+Lakeside+Blvd+N,+Shelby+Township,+MI+48315&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="map-embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JR Barber Haus location"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
