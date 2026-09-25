import { profile, education } from "../data/resumeData";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{profile.bio}</p>
      <div className="card education-card">
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
        <p>
          CGPA: <strong>{education.cgpa}</strong> · Batch: {education.batch}
        </p>
      </div>
    </section>
  );
}
