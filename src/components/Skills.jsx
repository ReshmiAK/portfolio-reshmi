import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills">
      <p className="eyebrow">Skills</p>
      <h2>What I work with</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="card skill-card" key={category}>
            <h3>{category}</h3>
            <ul className="tag-list">
              {items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
