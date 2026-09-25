import { education } from "../data/resumeData";

export default function About() {
  return (
    <>
      <h2>About Me</h2>
      <p>
        I'm a Computer Science student who enjoys building practical, real-world
        software - from full-stack web apps to AI/ML powered tools - and I'm
        always looking for the next interesting problem to solve.
      </p>
      <div className="card education-card">
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
        <p>
          CGPA: <strong>{education.cgpa}</strong> · Batch: {education.batch}
        </p>
      </div>
    </>
  );
}
