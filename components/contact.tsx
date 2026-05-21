import { Reveal } from "./reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <Reveal>
          <h2 className="contact-title">Ready for your next cut?</h2>
        </Reveal>
        <Reveal delay={160}>
          <a href="https://book.squareup.com/appointments/p1zigyf4do2lxd/location/L904FJK880TN7/services" target="_blank" rel="noopener noreferrer" className="contact-cta">Book Now</a>
        </Reveal>
      </div>
    </section>
  );
}
