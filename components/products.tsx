import { Reveal } from "./reveal";

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <Reveal>
          <span className="section-label">Products</span>
          <h2 className="section-title">Shop Coming Soon</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="products-sub">
            Premium grooming products curated by JR Barber Haus — dropping soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
