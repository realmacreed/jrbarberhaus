import { Reveal } from "./reveal";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <Reveal>
          <blockquote className="about-quote">
            &ldquo;The craft is in the details.&rdquo;
          </blockquote>
        </Reveal>
        <div className="about-divider" aria-hidden="true" />
        <Reveal delay={160}>
          <div className="about-bio">
            <p>JR Barber Haus was founded on the belief that every client deserves a premium experience. From the first consultation to the final line, precision and care go into every service.</p>
            <p>Located in Shelby Township, MI, we bring old-school craftsmanship and modern technique together in every cut.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
