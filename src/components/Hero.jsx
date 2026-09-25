import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <h2>Welcome!</h2>
      <p className="hero-name">{profile.name}</p>
      <p className="hero-title">{profile.title}</p>
      <div className="hero-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
