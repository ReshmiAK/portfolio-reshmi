import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="eyebrow">Welcome</p>
      <h1>{profile.name}</h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-intro">{profile.bio}</p>
      <div className="hero-links">
        <a href={`mailto:${profile.email}`} className="btn">
          Email Me
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
          GitHub
        </a>
      </div>
    </section>
  );
}
