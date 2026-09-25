import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <p>© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
