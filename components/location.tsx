import { Reveal } from "./reveal";

const hours = [
  { day: "Monday – Friday", time: "9:00 am – 7:00 pm" },
  { day: "Saturday", time: "8:00 am – 5:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="location-inner">
        <Reveal>
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Location &amp; Hours</h2>
        </Reveal>
        <div className="location-grid">
          <Reveal delay={100}>
            <div>
              <div className="location-block">
                <span className="location-detail-label">Address</span>
                <p className="location-detail-value">
                  14071 Lakeside Blvd N<br />Shelby Township, MI 48315
                </p>
              </div>
              <div className="location-block">
                <span className="location-detail-label">Instagram</span>
                <p className="location-detail-value">
                  <a href="https://www.instagram.com/jrbarberhaus/" target="_blank" rel="noopener noreferrer">@jrbarberhaus</a>
                </p>
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
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
