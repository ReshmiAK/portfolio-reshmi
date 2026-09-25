import { profile } from "../data/resumeData";

export default function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <p className="resume-intro">
        Download my full resume for a complete overview of my experience and skills.
      </p>
      <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn">
        Download My Resume (PDF)
      </a>
    </>
  );
}
