import { profile } from "../data/resumeData";

export default function Resume() {
  return (
    <section id="resume">
      <p className="eyebrow">Resume</p>
      <h2>Get the full picture</h2>
      <p className="section-lead">
        Download my full resume for a complete overview of my experience and skills.
      </p>
      <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn">
        Download My Resume (PDF)
      </a>
    </section>
  );
}
