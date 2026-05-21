import { Reveal } from "./reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-marble" aria-hidden="true">
        <div className="hero-marble-shimmer" />
      </div>
      <div className="hero-rule" aria-hidden="true" />
      <div className="hero-content">
        <Reveal>
          <div className="hero-brand">
            <img
              src="/logo.svg"
              alt="JR Barber Haus"
              width={340}
              height={340}
              className="hero-brand-logo"
            />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <p className="hero-location">Shelby Township, MI &nbsp;&middot;&nbsp; Est. 2024</p>
        </Reveal>
        <Reveal delay={340}>
          <div className="hero-ctas">
            <a href="https://book.squareup.com/appointments/p1zigyf4do2lxd/location/L904FJK880TN7/services" target="_blank" rel="noopener noreferrer" className="hero-cta-primary">Book Appointment</a>
            <a href="#services" className="hero-cta-secondary">View Services &rarr;</a>
          </div>
        </Reveal>
      </div>
      <div className="hero-shop">
        <Reveal delay={400}>
          <span className="section-label">Shop</span>
          <h2 className="hero-shop-title">Coming Soon</h2>
          <p className="hero-shop-sub">Premium grooming products curated by JR Barber Haus.</p>
        </Reveal>
      </div>

    </section>
  );
}
