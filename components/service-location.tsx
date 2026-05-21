import { Reveal } from "./reveal";

const services = [
  { name: "Haircut", price: "$40" },
  { name: "Haircut + Beard", price: "$50" },
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
