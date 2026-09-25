import { forwardRef } from "react";
import { profile } from "../../data/resumeData";

const BackCoverPage = forwardRef((_, ref) => {
  return (
    <div className="book-page book-cover" ref={ref}>
      <div className="book-cover-content">
        <span className="book-cover-kicker">Thanks for reading</span>
        <h1 className="book-cover-small">{profile.name}</h1>
        <div className="book-cover-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/reshmiashokkumar
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/ReshmiAK
          </a>
        </div>
      </div>
    </div>
  );
});

BackCoverPage.displayName = "BackCoverPage";

export default BackCoverPage;
