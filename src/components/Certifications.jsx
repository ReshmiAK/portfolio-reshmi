import { certifications } from "../data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications">
      <p className="eyebrow">Certifications</p>
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="card cert-card" key={cert.name}>
            <p className="cert-name">{cert.name}</p>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
