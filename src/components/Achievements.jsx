import { achievements, coursework } from "../data/resumeData";

export default function Achievements() {
  return (
    <section id="achievements">
      <p className="eyebrow">Achievements</p>
      <h2>Milestones</h2>
      <ul className="achievements-list">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subheading">Coursework</h3>
      <ul className="tag-list centered">
        {coursework.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
