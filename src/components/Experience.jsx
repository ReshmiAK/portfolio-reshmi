import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="card timeline-item" key={`${job.company}-${job.role}`}>
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-company">{job.company}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
